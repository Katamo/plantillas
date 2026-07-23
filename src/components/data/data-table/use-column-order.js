import { ref } from 'vue'

/**
 * Reordenación de columnas por drag&drop HTML5 sobre los <th>.
 * El lado de inserción (before/after) se calcula contra el punto medio
 * horizontal del th objetivo, en orden lógico (se invierte en RTL).
 *
 * @param {Object}   options
 * @param {Function} options.getOrder  - () => string[] orden completo actual (incluidas ocultas)
 * @param {Function} options.onReorder - (order: string[]) => void
 * @param {Function} options.isRTL     - () => boolean
 */
export function useColumnOrder({ getOrder, onReorder, isRTL }) {
  const dragKey = ref(null)
  const dropTarget = ref(null) // { key, side: 'before' | 'after' }

  function onDragStart(event, col) {
    // El handle de resize convive dentro del th arrastrable: si el gesto
    // empieza sobre él, cancelar el drag para no robarle el pointerdown
    if (event.target.closest('.c-data-table__resize')) {
      event.preventDefault()
      return
    }
    if (col.reorderable === false) {
      event.preventDefault()
      return
    }
    dragKey.value = col.key
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', col.key)
  }

  function onDragOver(event, col) {
    if (!dragKey.value || col.reorderable === false) return
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    if (col.key === dragKey.value) {
      dropTarget.value = null
      return
    }
    const rect = event.currentTarget.getBoundingClientRect()
    const beforeHalf = event.clientX < rect.left + rect.width / 2
    // En RTL la mitad izquierda es "después" en orden lógico
    const side = beforeHalf !== isRTL() ? 'before' : 'after'
    dropTarget.value = { key: col.key, side }
  }

  function onDrop() {
    if (!dragKey.value || !dropTarget.value) {
      reset()
      return
    }
    const { key: targetKey, side } = dropTarget.value
    const order = getOrder().filter((k) => k !== dragKey.value)
    const index = order.indexOf(targetKey)
    if (index === -1) {
      reset()
      return
    }
    order.splice(side === 'after' ? index + 1 : index, 0, dragKey.value)
    onReorder(order)
    reset()
  }

  function onDragEnd() {
    reset()
  }

  function reset() {
    dragKey.value = null
    dropTarget.value = null
  }

  return { dragKey, dropTarget, onDragStart, onDragOver, onDrop, onDragEnd }
}
