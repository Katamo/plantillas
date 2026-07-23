import { ref, computed } from 'vue'

/**
 * Selección múltiple sobre una lista ordenada de claves, con los
 * modificadores de teclado habituales de los exploradores de archivos:
 *
 *  - clic            → selección única
 *  - Ctrl/Cmd + clic → alterna el elemento sin tocar el resto
 *  - Shift + clic    → añade el rango entre el ancla y el elemento pulsado
 *
 * Lógica pura (sin DOM): sirve para tablas, listas, galerías o árboles.
 *
 * @param {import('vue').Ref<Array>} orderedKeys  - claves en el orden en que se presentan
 * @param {import('vue').Ref<Array>} selectedKeys - ref escribible con las claves seleccionadas
 */
export function useMultiSelection(orderedKeys, selectedKeys) {
  // Ancla del último clic: origen de los rangos con Shift
  const anchor = ref(null)

  const selectedSet = computed(() => new Set(selectedKeys.value))

  function isSelected(key) {
    return selectedSet.value.has(key)
  }

  /**
   * Gestiona un clic sobre `key` leyendo los modificadores del evento
   * (o de cualquier objeto con shiftKey/ctrlKey/metaKey).
   */
  function handleClick(key, event = {}) {
    const next = new Set(selectedSet.value)

    if (event.shiftKey && anchor.value !== null) {
      const keys = orderedKeys.value
      const from = keys.indexOf(anchor.value)
      const to = keys.indexOf(key)
      if (from !== -1 && to !== -1) {
        const [lo, hi] = from < to ? [from, to] : [to, from]
        for (let i = lo; i <= hi; i++) next.add(keys[i])
      }
    } else if (event.ctrlKey || event.metaKey) {
      if (next.has(key)) next.delete(key)
      else next.add(key)
    } else {
      next.clear()
      next.add(key)
    }

    anchor.value = key
    selectedKeys.value = [...next]
  }

  /** Alterna un elemento sin modificadores (checkboxes). */
  function toggle(key) {
    const next = new Set(selectedSet.value)
    if (next.has(key)) next.delete(key)
    else next.add(key)
    anchor.value = key
    selectedKeys.value = [...next]
  }

  /** Deja como única selección el elemento indicado. */
  function selectOnly(key) {
    anchor.value = key
    selectedKeys.value = [key]
  }

  function selectAll() {
    selectedKeys.value = [...orderedKeys.value]
  }

  function clear() {
    anchor.value = null
    selectedKeys.value = []
  }

  const allSelected = computed(
    () => orderedKeys.value.length > 0 && orderedKeys.value.every((k) => selectedSet.value.has(k))
  )

  // Estado intermedio: hay selección pero no es completa (checkbox tri-estado)
  const someSelected = computed(() => selectedKeys.value.length > 0 && !allSelected.value)

  return {
    isSelected,
    handleClick,
    toggle,
    selectOnly,
    selectAll,
    clear,
    allSelected,
    someSelected,
    anchor,
  }
}
