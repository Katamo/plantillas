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

  // Leído en cada tick (no cacheado), así que un cambio en caliente de
  // configRef.value se nota en el siguiente frame sin reiniciar el layout.
  function cfg() {
    const c = configRef?.value || {}
    return {
      repulsion: c.repulsion ?? 2600,
      springLength: c.springLength ?? 90,
    }
  }

  function ensure(id) {
    if (!positions[id]) {
      const angle = Math.random() * Math.PI * 2
      const r = 40 + Math.random() * 40
      positions[id] = { x: Math.cos(angle) * r, y: Math.sin(angle) * r, vx: 0, vy: 0, fixed: false }
    }
    return positions[id]
  }

  watch(
    nodesRef,
    (nodes) => {
      nodes.forEach((n) => ensure(n.id))
      const ids = new Set(nodes.map((n) => n.id))
      Object.keys(positions).forEach((id) => {
        if (!ids.has(id)) delete positions[id]
      })
      reheat()
    },
    { immediate: true }
  )

  function reheat(amount = 0.6) {
    alpha = Math.max(alpha, amount)
  }

  function setFixed(id, x, y) {
    const p = ensure(id)
    p.fixed = true
    p.x = x
    p.y = y
    p.vx = 0
    p.vy = 0
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
    }
    raf = requestAnimationFrame(tick)
  }

  onMounted(() => {
    raf = requestAnimationFrame(tick)
  })
  onBeforeUnmount(() => {
    if (raf) cancelAnimationFrame(raf)
  })

  return { positions, reheat, setFixed, release }
}
