import { ref } from 'vue'

/**
 * Drag&drop de una o varias filas seleccionadas para reordenarlas.
 * El componente no muta `rows`: al soltar se notifica el movimiento y es el
 * consumidor quien aplica el reorden sobre sus datos.
 *
 * @param {Object}   options
 * @param {Function} options.getVisibleKeys - () => claves en orden visual
 * @param {Function} options.isSelected     - (key) => boolean
 * @param {Function} options.selectOnly     - (key) => void
 * @param {Function} options.onReorder      - ({ keys, targetKey, position }) => void
 */
export function useRowDrag({ getVisibleKeys, isSelected, selectOnly, onReorder }) {
  const draggingKeys = ref(null)
  const dropTarget = ref(null) // { key, position: 'before' | 'after' }

  function onDragStart(event, key) {
    // Patrón explorador de archivos: arrastrar una fila no seleccionada la
    // convierte en la única selección; una seleccionada arrastra el grupo
    if (!isSelected(key)) selectOnly(key)
    draggingKeys.value = getVisibleKeys().filter((k) => isSelected(k) || k === key)
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', String(draggingKeys.value.length))
  }

  function onDragOver(event, key) {
    if (!draggingKeys.value) return
    if (draggingKeys.value.includes(key)) {
      dropTarget.value = null
      return
    }
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    const rect = event.currentTarget.getBoundingClientRect()
    const position = event.clientY < rect.top + rect.height / 2 ? 'before' : 'after'
    dropTarget.value = { key, position }
  }

  function onDrop() {
    if (!draggingKeys.value || !dropTarget.value) {
      reset()
      return
    }
    onReorder({
      keys: [...draggingKeys.value],
      targetKey: dropTarget.value.key,
      position: dropTarget.value.position,
    })
    reset()
  }

  function onDragEnd() {
    reset()
  }

  function reset() {
    draggingKeys.value = null
    dropTarget.value = null
  }

  return { draggingKeys, dropTarget, onDragStart, onDragOver, onDrop, onDragEnd }
}
