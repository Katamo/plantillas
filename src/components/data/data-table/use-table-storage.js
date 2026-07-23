const SCHEMA_VERSION = 1
const SAVE_DEBOUNCE_MS = 200

/**
 * Persistencia opcional del estado de la tabla en localStorage.
 * Formato: { v: 1, widths: {...}, hidden: [...], order: [...] }
 * Si la versión de esquema no coincide, el estado guardado se descarta.
 *
 * @param {String|null} storageKey - null desactiva la persistencia
 */
export function useTableStorage(storageKey) {
  const key = storageKey ? `c-data-table:${storageKey}` : null
  let timer = null

  function load() {
    if (!key || typeof window === 'undefined') return null
    try {
      const data = JSON.parse(window.localStorage.getItem(key) ?? 'null')
      if (!data || data.v !== SCHEMA_VERSION) return null
      return data
    } catch {
      return null
    }
  }

  function save({ widths, hidden, order }) {
    if (!key || typeof window === 'undefined') return
    clearTimeout(timer)
    timer = setTimeout(() => {
      try {
        window.localStorage.setItem(
          key,
          JSON.stringify({ v: SCHEMA_VERSION, widths, hidden, order })
        )
      } catch {
        // almacenamiento lleno o bloqueado: la persistencia es best-effort
      }
    }, SAVE_DEBOUNCE_MS)
  }

  return { enabled: Boolean(key), load, save }
}
