import { ref } from 'vue'

/**
 * Cámara 2D (paneo + zoom) para un lienzo. No toca el DOM directamente:
 * el componente decide cómo traducir eventos de puntero/rueda en llamadas
 * a `startPan`/`movePan`/`endPan`/`zoomAt`.
 *
 * `size` es `{ width, height }` en píxeles CSS del lienzo (no del buffer
 * con devicePixelRatio aplicado).
 */
export function usePanZoom() {
  const camX = ref(0)
  const camY = ref(0)
  const zoom = ref(0.95)

  let panStart = null

  function worldToScreen(x, y, size) {
    return [(x + camX.value) * zoom.value + size.width / 2, (y + camY.value) * zoom.value + size.height / 2]
  }

  function screenToWorld(x, y, size) {
    return [(x - size.width / 2) / zoom.value - camX.value, (y - size.height / 2) / zoom.value - camY.value]
  }

  function startPan(mx, my) {
    panStart = { mx, my, camX: camX.value, camY: camY.value }
  }

  function movePan(mx, my) {
    if (!panStart) return
    camX.value = panStart.camX + (mx - panStart.mx) / zoom.value
    camY.value = panStart.camY + (my - panStart.my) / zoom.value
  }

  function endPan() {
    panStart = null
  }

  function isPanning() {
    return panStart !== null
  }

  function zoomAt(mx, my, size, deltaY) {
    const [wx, wy] = screenToWorld(mx, my, size)
    zoom.value = Math.min(Math.max(zoom.value * Math.pow(1.0015, -deltaY), 0.25), 2.5)
    const [sx, sy] = worldToScreen(wx, wy, size)
    camX.value += (mx - sx) / zoom.value
    camY.value += (my - sy) / zoom.value
  }

  return { camX, camY, zoom, worldToScreen, screenToWorld, startPan, movePan, endPan, isPanning, zoomAt }
}
