import { ref, onBeforeUnmount } from 'vue'

const DEFAULT_WIDTH = 120
const MIN_WIDTH = 60

// Clase global sobre <body> durante el arrastre: desactiva la selección de
// texto y fuerza el cursor col-resize (definida en c-data-table.scss)
const BODY_CLASS = 'c-data-table-resizing'

/**
 * Redimensionado de columnas arrastrando el handle del borde de cada <th>.
 * Mantiene anchuras "en vivo" durante el arrastre y confirma al soltar.
 *
 * @param {Object}   options
 * @param {import('vue').Ref<Array>} options.columns - ColDef[] completas
 * @param {Function} options.getWidths  - () => Record<key, number> actuales
 * @param {Function} options.onCommit   - (widths) => void al soltar
 * @param {Function} options.isRTL      - () => boolean
 */
export function useColumnResize({ columns, getWidths, onCommit, isRTL }) {
  const resizing = ref(null) // { key, startX, startWidth, min, dir }
  const liveWidths = ref({})

  function colDef(key) {
    return columns.value.find((c) => c.key === key)
  }

  function defaultWidth(key) {
    return colDef(key)?.width ?? DEFAULT_WIDTH
  }

  function minWidth(key) {
    return colDef(key)?.minWidth ?? MIN_WIDTH
  }

  /** Anchura efectiva: en vivo durante el arrastre, confirmada el resto. */
  function effectiveWidth(key) {
    if (resizing.value) return liveWidths.value[key] ?? getWidths()[key] ?? defaultWidth(key)
    return getWidths()[key] ?? defaultWidth(key)
  }

  function start(event, col) {
    event.preventDefault()
    event.stopPropagation()
    const widths = getWidths()
    const seed = {}
    for (const c of columns.value) seed[c.key] = widths[c.key] ?? c.width ?? DEFAULT_WIDTH
    liveWidths.value = seed
    resizing.value = {
      key: col.key,
      startX: event.clientX,
      startWidth: seed[col.key],
      min: minWidth(col.key),
      dir: isRTL() ? -1 : 1,
    }
    document.body.classList.add(BODY_CLASS)
    document.addEventListener('pointermove', move)
    document.addEventListener('pointerup', end)
  }

  function move(event) {
    if (!resizing.value) return
    const { key, startX, startWidth, min, dir } = resizing.value
    const delta = (event.clientX - startX) * dir
    liveWidths.value = { ...liveWidths.value, [key]: Math.max(min, startWidth + delta) }
  }

  function end() {
    cleanup()
    if (resizing.value) {
      resizing.value = null
      onCommit({ ...liveWidths.value })
    }
  }

  function cleanup() {
    document.removeEventListener('pointermove', move)
    document.removeEventListener('pointerup', end)
    document.body.classList.remove(BODY_CLASS)
  }

  onBeforeUnmount(() => {
    cleanup()
    resizing.value = null
  })

  return { resizing, effectiveWidth, start, MIN_WIDTH }
}
