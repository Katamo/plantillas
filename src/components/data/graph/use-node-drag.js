/**
 * Arrastre de un nodo: al empezar sobre un nodo, lo fija en la simulación
 * de fuerzas (`layout.setFixed`) y lo suelta al terminar (`layout.release`).
 * Si el puntero baja fuera de cualquier nodo, `start` devuelve `null` y el
 * componente decide tratarlo como paneo del lienzo en su lugar.
 */
export function useNodeDrag({ hitTest, layout, panZoom }) {
  let draggingId = null

  function start(mx, my, size) {
    const n = hitTest.pick(mx, my, size)
    if (n) draggingId = n.id
    return n
  }

  function move(mx, my, size) {
    if (!draggingId) return false
    const [wx, wy] = panZoom.screenToWorld(mx, my, size)
    layout.setFixed(draggingId, wx, wy)
    return true
  }

  function end() {
    if (draggingId) layout.release(draggingId)
    draggingId = null
  }

  function isDragging() {
    return draggingId !== null
  }

  return { start, move, end, isDragging }
}
