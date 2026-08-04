import { watch, onMounted, onBeforeUnmount } from 'vue'

/**
 * Simulación de fuerzas simple (repulsión + muelles + centrado) sobre un
 * conjunto de nodos/aristas reactivo. Devuelve un objeto plano id -> {x,y,...}
 * que el componente lee directamente en su bucle de dibujo — no se usa
 * `reactive()` a propósito: nada depende del sistema de reactividad de Vue
 * para redibujar, así que un objeto plano evita el coste del proxy en el
 * cálculo de fuerzas, que recorre todos los pares de nodos en cada tick.
 *
 * @param {import('vue').Ref<Array>} nodesRef - [{ id, ... }]
 * @param {import('vue').Ref<Array>} edgesRef - [{ source, target, ... }]
 * @param {import('vue').Ref} configRef - { repulsion?, springLength? }
 * @param {(node: Object) => number} [radiusOfFn] - radio visual de un nodo
 *   (el mismo que usa el componente para dibujar); si se pasa, además de la
 *   repulsión habitual se impone una distancia mínima real entre nodos
 *   (radioA + radioB + margen) corrigiendo la posición directamente, no solo
 *   la fuerza — así dos nodos nunca quedan solapados aunque la repulsión ya
 *   se haya enfriado (alpha bajo). Sin esta función, el comportamiento es el
 *   de siempre (solo repulsión inversa al cuadrado, sin mínimo garantizado).
 */
const COLLISION_MARGIN = 4

export function useForceLayout(nodesRef, edgesRef, configRef, radiusOfFn) {
  const positions = {} // id -> { x, y, vx, vy, fixed }
  let alpha = 1
  let raf = null
  // El bucle de layout se para cuando alpha se enfría y no hay interacción, y
  // se rearma en cada reheat (mutación / drag / cambio de config). Antes giraba
  // en vacío para siempre — coste inútil en un grafo estático (PLT-004 tanda 1).
  let running = false

  // Leído en cada tick (no cacheado), así que un cambio en caliente de
  // configRef.value se nota en el siguiente frame sin reiniciar el layout.
  function cfg() {
    const c = configRef?.value || {}
    return {
      repulsion: c.repulsion ?? 2600,
      springLength: c.springLength ?? 90,
    }
  }

  // `anchor` (opcional): posición de un nodo ya colocado junto al que nace el
  // nuevo (con un pequeño jitter). En la expansión incremental del explorador
  // (MAS-136) evita que los nodos nuevos entren volando desde el origen —
  // nacen al lado del vecino que los trajo. Sin anchor, comportamiento de
  // siempre: alrededor del origen.
  function ensure(id, anchor) {
    if (!positions[id]) {
      if (anchor) {
        const jitter = 30
        positions[id] = {
          x: anchor.x + (Math.random() - 0.5) * jitter,
          y: anchor.y + (Math.random() - 0.5) * jitter,
          vx: 0,
          vy: 0,
          fixed: false,
        }
      } else {
        const angle = Math.random() * Math.PI * 2
        const r = 40 + Math.random() * 40
        positions[id] = { x: Math.cos(angle) * r, y: Math.sin(angle) * r, vx: 0, vy: 0, fixed: false }
      }
    }
    return positions[id]
  }

  // Primer vecino de `id` que ya tenga posición — sirve de ancla para el nodo
  // nuevo. O(E) por nodo nuevo, solo al añadir; despreciable frente al tick.
  function anchorFor(id, edges) {
    for (const e of edges) {
      if (e.source === id && positions[e.target]) return positions[e.target]
      if (e.target === id && positions[e.source]) return positions[e.source]
    }
    return null
  }

  watch(
    nodesRef,
    (nodes) => {
      const edges = edgesRef.value || []
      const hadPositions = Object.keys(positions).length > 0
      nodes.forEach((n) => {
        if (!positions[n.id]) ensure(n.id, anchorFor(n.id, edges))
      })
      const ids = new Set(nodes.map((n) => n.id))
      let removed = 0
      Object.keys(positions).forEach((id) => {
        if (!ids.has(id)) {
          delete positions[id]
          removed++
        }
      })
      // Reheat moderado cuando solo se añade sobre un grafo ya colocado (el
      // existente apenas debe reacomodarse); completo en la carga inicial o si
      // hubo bajas estructurales.
      reheat(hadPositions && removed === 0 ? 0.35 : 0.6)
    },
    { immediate: true }
  )

  function start() {
    if (!running) {
      running = true
      raf = requestAnimationFrame(tick)
    }
  }

  function reheat(amount = 0.6) {
    alpha = Math.max(alpha, amount)
    start()
  }

  function setFixed(id, x, y) {
    const p = ensure(id)
    p.fixed = true
    p.x = x
    p.y = y
    p.vx = 0
    p.vy = 0
    // Mantener la simulación viva mientras se arrastra para que los vecinos
    // sigan al nodo fijado (si estaba fría, no se moverían).
    reheat(0.2)
  }

  function release(id) {
    const p = positions[id]
    if (p) p.fixed = false
    reheat(0.3)
  }

  function tick() {
    if (alpha > 0.001) {
      const nodes = nodesRef.value
      const edges = edgesRef.value
      const { repulsion, springLength } = cfg()

      for (let i = 0; i < nodes.length; i++) {
        const a = positions[nodes[i].id]
        if (!a) continue
        for (let j = i + 1; j < nodes.length; j++) {
          const b = positions[nodes[j].id]
          if (!b) continue
          const dx = a.x - b.x
          const dy = a.y - b.y
          let d2 = dx * dx + dy * dy
          if (d2 < 1) d2 = 1
          const d = Math.sqrt(d2)
          const force = (repulsion * alpha) / d2
          const fx = (dx / d) * force
          const fy = (dy / d) * force
          if (!a.fixed) {
            a.vx += fx
            a.vy += fy
          }
          if (!b.fixed) {
            b.vx -= fx
            b.vy -= fy
          }

          // Distancia mínima real: si el par queda más cerca que la suma de
          // sus radios (+ margen), se separan en posición directamente, no
          // solo en fuerza — la repulsión de arriba por sí sola no garantiza
          // esto (cae en 1/d², así que dos nodos muy juntos pueden quedar
          // en equilibrio solapados si el resto de fuerzas los empuja igual
          // desde ambos lados).
          if (radiusOfFn) {
            const minDist = radiusOfFn(nodes[i]) + radiusOfFn(nodes[j]) + COLLISION_MARGIN
            if (d < minDist) {
              const overlap = (minDist - d) / 2
              const ux = dx / d
              const uy = dy / d
              if (!a.fixed) {
                a.x += ux * overlap
                a.y += uy * overlap
              }
              if (!b.fixed) {
                b.x -= ux * overlap
                b.y -= uy * overlap
              }
            }
          }
        }
      }

      edges.forEach((e) => {
        const s = positions[e.source]
        const t = positions[e.target]
        if (!s || !t) return
        const target = springLength
        const dx = t.x - s.x
        const dy = t.y - s.y
        const d = Math.sqrt(dx * dx + dy * dy) || 1
        const force = (d - target) * 0.02 * alpha
        const fx = (dx / d) * force
        const fy = (dy / d) * force
        if (!s.fixed) {
          s.vx += fx
          s.vy += fy
        }
        if (!t.fixed) {
          t.vx -= fx
          t.vy -= fy
        }
      })

      Object.values(positions).forEach((p) => {
        if (p.fixed) return
        p.vx += -p.x * 0.0035 * alpha
        p.vy += -p.y * 0.0035 * alpha
        p.vx *= 0.82
        p.vy *= 0.82
        p.x += p.vx
        p.y += p.vy
      })

      alpha *= 0.985
      raf = requestAnimationFrame(tick)
    } else {
      // Frío y sin interacción: parar el bucle hasta el próximo reheat.
      running = false
      raf = null
    }
  }

  onMounted(() => {
    start()
  })
  onBeforeUnmount(() => {
    if (raf) cancelAnimationFrame(raf)
    running = false
  })

  return { positions, reheat, setFixed, release }
}
