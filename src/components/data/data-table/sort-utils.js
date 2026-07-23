/**
 * Comparador por defecto para valores de celda: numbers y Dates de forma
 * nativa, strings con localeCompare numérico e insensible a mayúsculas;
 * null/undefined siempre al final.
 */
export function defaultCompare(a, b) {
  const aNull = a === null || a === undefined || a === ''
  const bNull = b === null || b === undefined || b === ''
  if (aNull && bNull) return 0
  if (aNull) return 1
  if (bNull) return -1
  if (typeof a === 'number' && typeof b === 'number') return a - b
  if (a instanceof Date && b instanceof Date) return a - b
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' })
}

/**
 * Devuelve una copia de `rows` ordenada por la columna indicada.
 * Si la columna define `sorter(rowA, rowB, dir)` se usa como comparador
 * ascendente sobre filas completas; la dirección la aplica esta función.
 *
 * @param {Array}  rows
 * @param {Object} column - ColDef con `key` y opcionalmente `sorter`
 * @param {String} dir    - 'asc' | 'desc'
 */
export function sortRows(rows, column, dir) {
  const factor = dir === 'desc' ? -1 : 1
  return [...rows].sort((rowA, rowB) => {
    if (column.sorter) return factor * column.sorter(rowA, rowB, dir)
    return factor * defaultCompare(rowA[column.key], rowB[column.key])
  })
}
