/**
 * Detección de qué nodo cae bajo un punto de pantalla dado. Recorre los
 * nodos visibles y elige el más cercano cuyo radio lo cubre; suma un
 * pequeño margen (6px en espacio de mundo) para que el hit-test sea más
 * tolerante que el propio radio visual.
 *
 * @param {Object} opts
 * @param {import('vue').Ref<Array>} opts.nodes     - nodos actualmente visibles
 * @param {Object} opts.positions                    - mapa id -> {x,y} de useForceLayout
 * @param {(node: Object) => number} opts.radiusOf    - radio (en espacio de mundo) de un nodo
 * @param {ReturnType<typeof import('./use-pan-zoom').usePanZoom>} opts.panZoom
 */
export function useHitTest({ nodes, positions, radiusOf, panZoom }) {
  function pick(mx, my, size) {
    const [wx, wy] = panZoom.screenToWorld(mx, my, size)
    let best = null
    let bestD = Infinity
    for (const n of nodes.value) {
      const p = positions[n.id]
      if (!p) continue
      const d = Math.hypot(p.x - wx, p.y - wy)
      const r = radiusOf(n) + 6
      if (d < r && d < bestD) {
        best = n
        bestD = d
      }
    }
    return best
  }

  return { pick }
}
