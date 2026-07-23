<template>
  <div
    class="c-data-table"
    :data-density="density || undefined"
    :data-striped="striped || undefined"
    :data-bordered="bordered || undefined"
    :data-loading="loading || undefined"
    :data-sticky="stickyHeader || undefined"
  >
    <div
      ref="wrapEl"
      class="c-data-table__wrap"
      tabindex="-1"
      :aria-busy="loading || undefined"
      @scroll.passive="onWrapScroll"
    >
      <table class="c-data-table__table">
        <colgroup>
          <col v-if="selectionColumn" class="c-data-table__col-selection">
          <col
            v-for="col in visibleColumns"
            :key="col.key"
            :style="{
              width: effectiveWidth(col.key) + 'px',
              minWidth: (col.minWidth ?? MIN_WIDTH) + 'px',
            }"
          >
          <slot name="append-col" />
        </colgroup>

        <thead class="c-data-table__head">
          <tr @contextmenu.prevent="openColumnsMenu">
            <th v-if="selectionColumn" class="c-data-table__th" data-selection scope="col">
              <span ref="selectAllEl" class="c-data-table__select-all">
                <BCheckbox
                  :model-value="allSelected"
                  :aria-label="labelSelectAll"
                  :disabled="!selectableKeys.length"
                  @update:model-value="toggleAll"
                />
              </span>
            </th>
            <th
              v-for="col in visibleColumns"
              :key="col.key"
              class="c-data-table__th"
              scope="col"
              :draggable="col.reorderable !== false || undefined"
              :data-align="col.align || undefined"
              :data-sorted="sortKeyModel === col.key ? (sortDirModel || 'asc') : undefined"
              :data-dragging="columnDnd.dragKey.value === col.key || undefined"
              :data-drop="columnDnd.dropTarget.value?.key === col.key ? columnDnd.dropTarget.value.side : undefined"
              :data-resizing="resize.resizing.value?.key === col.key || undefined"
              :aria-sort="ariaSort(col)"
              @dragstart="columnDnd.onDragStart($event, col)"
              @dragover="columnDnd.onDragOver($event, col)"
              @drop.prevent="columnDnd.onDrop()"
              @dragend="columnDnd.onDragEnd()"
            >
              <button
                v-if="col.sortable"
                type="button"
                class="c-data-table__sort-button"
                :aria-label="`${labelSortBy} ${col.label}`"
                @click="toggleSort(col)"
              >
                <span class="c-data-table__th-label">
                  <slot :name="`header-${col.key}`" :column="col">{{ col.label }}</slot>
                </span>
                <span class="c-data-table__sort-indicator" aria-hidden="true" />
              </button>
              <span v-else class="c-data-table__th-label">
                <slot :name="`header-${col.key}`" :column="col">{{ col.label }}</slot>
              </span>
              <span
                v-if="col.resizable !== false"
                class="c-data-table__resize"
                @pointerdown.stop="resize.start($event, col)"
              />
            </th>
            <slot name="append-th" />
          </tr>
        </thead>

        <tbody class="c-data-table__body">
          <tr
            v-for="(row, index) in displayRows"
            :key="keyOf(row)"
            :class="['c-data-table__row', rowClassFor(row, index)]"
            :data-selected="isRowSelected(keyOf(row)) || undefined"
            :data-clickable="selectable || undefined"
            :data-dragging="rowDnd.draggingKeys.value?.includes(keyOf(row)) || undefined"
            :data-drop="rowDnd.dropTarget.value?.key === keyOf(row) ? rowDnd.dropTarget.value.position : undefined"
            :draggable="rowsDragEnabled || undefined"
            @click="onRowClick($event, row, index)"
            @dblclick="onRowDblclick($event, row, index)"
            @contextmenu="onRowContextmenu($event, row, index)"
            @dragstart="rowsDragEnabled && rowDnd.onDragStart($event, keyOf(row))"
            @dragover="rowsDragEnabled && rowDnd.onDragOver($event, keyOf(row))"
            @drop.prevent="rowsDragEnabled && rowDnd.onDrop()"
            @dragend="rowsDragEnabled && rowDnd.onDragEnd()"
          >
            <td v-if="selectionColumn" class="c-data-table__td" data-selection @click.stop>
              <BCheckbox
                :model-value="isRowSelected(keyOf(row))"
                :aria-label="labelSelectRow"
                :disabled="!isRowSelectable(row)"
                @update:model-value="selection.toggle(keyOf(row))"
              />
            </td>
            <td
              v-for="col in visibleColumns"
              :key="col.key"
              class="c-data-table__td"
              :data-key="col.key"
              :data-align="col.align || undefined"
            >
              <slot
                :name="`cell-${col.key}`"
                :row="row"
                :value="row[col.key]"
                :column="col"
                :index="index"
              >{{ row[col.key] }}</slot>
            </td>
            <slot name="append-td" :row="row" :index="index" />
          </tr>
        </tbody>
      </table>

      <div v-if="loading" class="c-data-table__state" data-state="loading">
        <slot name="loading">{{ textLoading }}</slot>
      </div>
      <div v-else-if="!displayRows.length" class="c-data-table__state" data-state="empty">
        <slot name="empty">{{ textEmpty }}</slot>
      </div>
    </div>

    <button
      v-if="showScrollToTop && topButtonVisible"
      type="button"
      class="c-data-table__scroll-top"
      :aria-label="labelScrollTop"
      @click="scrollToTop"
    >↑</button>

    <Teleport to="body">
      <template v-if="columnsMenu">
        <div
          class="c-data-table__backdrop"
          @click="columnsMenu = null"
          @contextmenu.prevent="columnsMenu = null"
        />
        <div
          ref="popoverEl"
          class="c-data-table__popover"
          role="dialog"
          :aria-label="textColumnsMenu"
          :style="{ left: columnsMenu.x + 'px', top: columnsMenu.y + 'px' }"
          @click.stop
        >
          <p class="c-data-table__popover-title">{{ textColumnsMenu }}</p>
          <BCheckbox
            v-for="col in hideableColumns"
            :key="col.key"
            class="c-data-table__popover-item"
            :model-value="!isHidden(col.key)"
            @update:model-value="toggleColumn(col.key)"
          >{{ col.label }}</BCheckbox>
        </div>
      </template>

      <template v-if="rowMenu">
        <div
          class="c-data-table__backdrop"
          @click="rowMenu = null"
          @contextmenu.prevent="rowMenu = null"
        />
        <div
          ref="rowMenuEl"
          class="c-data-table__popover"
          role="menu"
          :style="{ left: rowMenu.x + 'px', top: rowMenu.y + 'px' }"
          @click.stop
        >
          <slot
            name="row-menu"
            :row="rowMenu.row"
            :column="rowMenu.column"
            :row-key="rowMenu.key"
            :index="rowMenu.index"
            :close="closeRowMenu"
          />
        </div>
      </template>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, useSlots, onBeforeUnmount, watchPostEffect } from 'vue'
import { BCheckbox } from '@bedrock/core/vue'
import { useOptionalModel } from '../../../composables/use-optional-model'
import { useMultiSelection } from '../../../composables/use-multi-selection'
import { sortRows } from './sort-utils'
import { useColumnResize } from './use-column-resize'
import { useColumnOrder } from './use-column-order'
import { useRowDrag } from './use-row-drag'
import { useTableStorage } from './use-table-storage'

/**
 * @typedef {Object} ColDef
 * @property {string}  key           - identificador único; usado para slots, orden y anchos
 * @property {string}  label         - texto de cabecera
 * @property {number}  [width=120]   - ancho inicial en px (table-layout: fixed)
 * @property {number}  [minWidth=60]
 * @property {'left'|'center'|'right'} [align='left']
 * @property {boolean} [sortable=false]
 * @property {boolean} [resizable=true]
 * @property {boolean} [hideable=true]    - aparece en el popover de columnas
 * @property {boolean} [reorderable=true] - se puede arrastrar para reordenar
 * @property {Function} [sorter]          - (rowA, rowB, dir) => number, comparador ascendente
 */

const props = defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, required: true },
  rowKey: { type: String, default: 'id' },
  // Clases extra por fila: función (row, index) => string|array|object, o un
  // valor estático. Se añade a la clase base del <tr>.
  rowClass: { type: [Function, String, Array, Object], default: null },
  // Predicado (row) => boolean: las filas que devuelvan false no se pueden
  // seleccionar (checkbox deshabilitado) y quedan fuera del "seleccionar
  // todo" y del tri-estado. null = todas seleccionables.
  rowSelectable: { type: Function, default: null },

  // Comportamiento
  selectable: { type: Boolean, default: false },
  selectionColumn: { type: Boolean, default: false },
  rowsDraggable: { type: Boolean, default: false },
  sortMode: { type: String, default: 'internal' }, // 'internal' | 'external'
  stickyHeader: { type: Boolean, default: true },
  loading: { type: Boolean, default: false },
  showScrollToTop: { type: Boolean, default: false },
  storageKey: { type: String, default: null },

  // Estado opcionalmente controlado (v-model); undefined = modo interno
  sortKey: { type: String, default: undefined },
  sortDir: { type: String, default: undefined },
  selectedKeys: { type: Array, default: undefined },
  hiddenColumns: { type: Array, default: undefined },
  columnWidths: { type: Object, default: undefined },
  columnOrder: { type: Array, default: undefined },

  // Variantes visuales (se vuelcan como data-* en el elemento raíz)
  density: { type: String, default: null },
  striped: { type: Boolean, default: false },
  bordered: { type: Boolean, default: false },

  // Textos (i18n)
  textLoading: { type: String, default: 'Cargando…' },
  textEmpty: { type: String, default: 'No hay datos' },
  textColumnsMenu: { type: String, default: 'Columnas' },
  labelSelectAll: { type: String, default: 'Seleccionar todas las filas' },
  labelSelectRow: { type: String, default: 'Seleccionar fila' },
  labelSortBy: { type: String, default: 'Ordenar por' },
  labelScrollTop: { type: String, default: 'Volver arriba' },
})

const emit = defineEmits([
  'update:sortKey',
  'update:sortDir',
  'update:selectedKeys',
  'update:hiddenColumns',
  'update:columnWidths',
  'update:columnOrder',
  'sort',
  'row-click',
  'row-dblclick',
  'row-contextmenu',
  'rows-reorder',
])

const slots = useSlots()
const wrapEl = ref(null)

// ── Persistencia: el estado guardado alimenta los valores iniciales del
//    modo no controlado; si el padre pasa la prop, la prop gana ─────────────
const storage = useTableStorage(props.storageKey)
const stored = storage.load()

function knownKeys(keys) {
  return keys.filter((k) => props.columns.some((c) => c.key === k))
}

const initialHidden = stored ? knownKeys(stored.hidden ?? []) : []
const initialOrder = stored ? knownKeys(stored.order ?? []) : props.columns.map((c) => c.key)
const initialWidths = stored
  ? Object.fromEntries(Object.entries(stored.widths ?? {}).filter(([k]) => props.columns.some((c) => c.key === k)))
  : {}

// ── Estado opcionalmente controlado ────────────────────────────────────────
const hiddenModel = useOptionalModel(props, 'hiddenColumns', emit, initialHidden)
const widthsModel = useOptionalModel(props, 'columnWidths', emit, initialWidths)
const orderModel = useOptionalModel(props, 'columnOrder', emit, initialOrder)
const sortKeyModel = useOptionalModel(props, 'sortKey', emit, null)
const sortDirModel = useOptionalModel(props, 'sortDir', emit, 'asc')
const selectedModel = useOptionalModel(props, 'selectedKeys', emit, [])

if (storage.enabled) {
  watch(
    [hiddenModel, widthsModel, orderModel],
    ([hidden, widths, order]) => storage.save({ hidden, widths, order }),
    { deep: true }
  )
}

// ── Columnas ordenadas y visibles ──────────────────────────────────────────
// Tolerante a columnas añadidas/quitadas por el consumidor: las claves
// desconocidas del orden se ignoran y las nuevas se añaden al final
const orderedColumns = computed(() => {
  const byKey = new Map(props.columns.map((c) => [c.key, c]))
  const order = (orderModel.value ?? []).filter((k) => byKey.has(k))
  const rest = props.columns.map((c) => c.key).filter((k) => !order.includes(k))
  return [...order, ...rest].map((k) => byKey.get(k))
})

const visibleColumns = computed(() =>
  orderedColumns.value.filter((c) => !(hiddenModel.value ?? []).includes(c.key))
)

const hideableColumns = computed(() => orderedColumns.value.filter((c) => c.hideable !== false))

function isHidden(key) {
  return (hiddenModel.value ?? []).includes(key)
}

function toggleColumn(key) {
  const hidden = hiddenModel.value ?? []
  hiddenModel.value = hidden.includes(key) ? hidden.filter((k) => k !== key) : [...hidden, key]
}

// ── Ordenación ─────────────────────────────────────────────────────────────
const sortedColumn = computed(() => props.columns.find((c) => c.key === sortKeyModel.value))

const displayRows = computed(() => {
  if (props.sortMode === 'internal' && sortedColumn.value) {
    return sortRows(props.rows, sortedColumn.value, sortDirModel.value || 'asc')
  }
  return props.rows
})

function toggleSort(col) {
  // Valores siguientes calculados en local: en modo controlado los getters de
  // los modelos siguen devolviendo la prop (que aún no ha hecho el round-trip
  // por el padre), así que releerlos tras asignar emitiría valores viejos.
  const nextKey = col.key
  const nextDir = sortKeyModel.value === col.key && sortDirModel.value === 'asc' ? 'desc' : 'asc'
  sortKeyModel.value = nextKey
  sortDirModel.value = nextDir
  emit('sort', { key: nextKey, dir: nextDir })
}

function ariaSort(col) {
  if (sortKeyModel.value !== col.key) return undefined
  return sortDirModel.value === 'desc' ? 'descending' : 'ascending'
}

// ── Filas y selección ──────────────────────────────────────────────────────
function keyOf(row) {
  return row[props.rowKey]
}

function rowClassFor(row, index) {
  return typeof props.rowClass === 'function' ? props.rowClass(row, index) : props.rowClass
}

function isRowSelectable(row) {
  return !props.rowSelectable || props.rowSelectable(row)
}

const visibleKeys = computed(() => displayRows.value.map(keyOf))

// La selección opera solo sobre las filas seleccionables: así allSelected,
// el tri-estado y los rangos con Shift excluyen las deshabilitadas sin
// tocar useMultiSelection. visibleKeys se conserva para el drag de filas.
const selectableKeys = computed(() =>
  props.rowSelectable ? displayRows.value.filter(isRowSelectable).map(keyOf) : visibleKeys.value
)

const selection = useMultiSelection(selectableKeys, selectedModel)
const { allSelected } = selection

function isRowSelected(key) {
  if (!props.selectable && !props.selectionColumn) return false
  return selection.isSelected(key)
}

function toggleAll() {
  if (selection.allSelected.value) selection.clear()
  else selection.selectAll()
}

// BCheckbox no expone la propiedad DOM `indeterminate`: se fija a mano
// sobre el input del checkbox de cabecera
const selectAllEl = ref(null)
watchPostEffect(() => {
  const input = selectAllEl.value?.querySelector('input')
  if (input) input.indeterminate = selection.someSelected.value
})

function onRowClick(event, row, index) {
  if (props.selectable && isRowSelectable(row)) selection.handleClick(keyOf(row), event)
  emit('row-click', { row, key: keyOf(row), index, event })
}

function onRowDblclick(event, row, index) {
  emit('row-dblclick', { row, key: keyOf(row), index, event })
}

// ── Resize de columnas ─────────────────────────────────────────────────────
function isRTL() {
  return wrapEl.value ? getComputedStyle(wrapEl.value).direction === 'rtl' : false
}

const resize = useColumnResize({
  columns: computed(() => props.columns),
  getWidths: () => widthsModel.value ?? {},
  onCommit: (widths) => {
    widthsModel.value = widths
  },
  isRTL,
})

const { effectiveWidth, MIN_WIDTH } = resize

// ── Reordenación de columnas (drag&drop) ───────────────────────────────────
const columnDnd = useColumnOrder({
  getOrder: () => orderedColumns.value.map((c) => c.key),
  onReorder: (order) => {
    orderModel.value = order
  },
  isRTL,
})

// ── Drag&drop de filas ─────────────────────────────────────────────────────
// Deshabilitado con ordenación activa: reordenar a mano una vista ordenada
// no tiene un destino coherente
const rowsDragEnabled = computed(() => props.rowsDraggable && !sortKeyModel.value)

const rowDnd = useRowDrag({
  getVisibleKeys: () => visibleKeys.value,
  isSelected: (key) => (props.selectable || props.selectionColumn) && selection.isSelected(key),
  selectOnly: (key) => {
    if (props.selectable || props.selectionColumn) selection.selectOnly(key)
  },
  onReorder: (payload) => emit('rows-reorder', payload),
})

// ── Popover de columnas y menú contextual de fila ──────────────────────────
const columnsMenu = ref(null) // { x, y }
const popoverEl = ref(null)
const rowMenu = ref(null) // { x, y, row, column, key, index }
const rowMenuEl = ref(null)

function clampToViewport(el, pos) {
  const rect = el.getBoundingClientRect()
  return {
    ...pos,
    x: Math.max(8, Math.min(pos.x, window.innerWidth - rect.width - 8)),
    y: Math.max(8, Math.min(pos.y, window.innerHeight - rect.height - 8)),
  }
}

function openColumnsMenu(event) {
  columnsMenu.value = { x: event.clientX, y: event.clientY }
  nextTick(() => {
    if (!popoverEl.value || !columnsMenu.value) return
    columnsMenu.value = clampToViewport(popoverEl.value, columnsMenu.value)
    popoverEl.value.querySelector('input')?.focus()
  })
}

function onRowContextmenu(event, row, index) {
  const td = event.target.closest('td')
  const colKey = td?.dataset.key ?? null
  const column = colKey ? props.columns.find((c) => c.key === colKey) ?? null : null
  if (slots['row-menu']) {
    event.preventDefault()
    rowMenu.value = { x: event.clientX, y: event.clientY, row, column, key: keyOf(row), index }
    nextTick(() => {
      if (rowMenuEl.value && rowMenu.value) {
        rowMenu.value = clampToViewport(rowMenuEl.value, rowMenu.value)
      }
    })
  }
  emit('row-contextmenu', {
    row,
    key: keyOf(row),
    index,
    column,
    x: event.clientX,
    y: event.clientY,
    event,
  })
}

function closeRowMenu() {
  rowMenu.value = null
}

function onMenuKeydown(event) {
  if (event.key === 'Escape') {
    columnsMenu.value = null
    rowMenu.value = null
    wrapEl.value?.focus()
  }
}

watch(
  () => Boolean(columnsMenu.value || rowMenu.value),
  (open) => {
    if (open) document.addEventListener('keydown', onMenuKeydown)
    else document.removeEventListener('keydown', onMenuKeydown)
  }
)

// ── Scroll to top ──────────────────────────────────────────────────────────
const topButtonVisible = ref(false)

function onWrapScroll() {
  topButtonVisible.value = (wrapEl.value?.scrollTop ?? 0) > 200
}

function scrollToTop() {
  wrapEl.value?.scrollTo({ top: 0, behavior: 'smooth' })
}

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onMenuKeydown)
})

defineExpose({ visibleColumns, effectiveWidth })
</script>

<style lang="scss" src="./c-data-table.scss" />
