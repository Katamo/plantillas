import { ref, computed } from 'vue'

/**
 * Estado "opcionalmente controlado": si el consumidor pasa la prop, el
 * componente funciona en modo controlado (la prop manda y cada cambio se
 * emite como `update:<name>`); si no la pasa, el componente mantiene su
 * propio estado interno inicializado con `initial`.
 *
 * La prop debe declararse con `default: undefined` para poder distinguir
 * "no pasada" de cualquier valor legítimo (incluido null).
 *
 * @param {Object}   props   - props reactivas del componente
 * @param {String}   name    - nombre de la prop / model
 * @param {Function} emit    - función emit del componente
 * @param {*}        initial - valor inicial del estado interno (modo no controlado)
 * @returns {import('vue').WritableComputedRef}
 */
export function useOptionalModel(props, name, emit, initial) {
  const internal = ref(props[name] !== undefined ? props[name] : initial)

  return computed({
    get: () => (props[name] !== undefined ? props[name] : internal.value),
    set: (value) => {
      internal.value = value
      emit(`update:${name}`, value)
    },
  })
}
