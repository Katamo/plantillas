import { onMounted, onUnmounted } from 'vue'

export function useScrollShrink(el, { enabled = true } = {}) {
  if (!enabled) return

  let rafId = null
  let resetRafId = null
  let isUpdating = false

  function updateHeight() {
    if (!el.value) return
    const style = getComputedStyle(el.value)
    const max = parseFloat(style.getPropertyValue('--scroll-shrink-max'))
    const min = parseFloat(style.getPropertyValue('--scroll-shrink-min'))
    const start = parseFloat(style.getPropertyValue('--scroll-shrink-start')) || 0
    const distance = parseFloat(style.getPropertyValue('--scroll-shrink-distance')) || 200
    const ratio = Math.min(Math.max(window.scrollY - start, 0) / distance, 1)
    const newH = Math.round(max - (max - min) * ratio)
    if (newH === Math.round(parseFloat(el.value.style.height) || max)) return

    el.value.style.height = `${newH}px`

    // Bloquea el scroll event que el propio reflow puede lanzar en este frame.
    // Se libera en el siguiente frame, cuando ya sólo llegan scrolls reales del usuario.
    isUpdating = true
    if (resetRafId) cancelAnimationFrame(resetRafId)
    resetRafId = requestAnimationFrame(() => {
      isUpdating = false
      resetRafId = null
    })

    if (ratio >= 1) {
      el.value.setAttribute('data-shrink', '')
    } else {
      el.value.removeAttribute('data-shrink')
    }
  }

  function onScroll() {
    if (isUpdating) return
    if (rafId) cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(() => {
      rafId = null
      updateHeight()
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    updateHeight()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    if (rafId) cancelAnimationFrame(rafId)
    if (resetRafId) cancelAnimationFrame(resetRafId)
  })
}
