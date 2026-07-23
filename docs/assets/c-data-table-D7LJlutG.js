import { S as inject, J as defineComponent, R as h, a5 as onBeforeUnmount, ak as ref, ac as openBlock, r as createElementBlock, l as createBaseVNode, p as createCommentVNode, a as Fragment, an as renderList, a2 as normalizeStyle, ap as renderSlot, a$ as withModifiers, z as createVNode, n as createBlock, ay as toDisplayString, aX as withCtx, x as createTextVNode, T as Teleport, aL as useSlots, aT as watch, i as computed, aV as watchPostEffect, _ as nextTick } from "./vendor-DbHuLTxc.js";
import { u as useOptionalModel } from "./useOptionalModel-CSCs5AM0.js";
import { u as useMultiSelection } from "./useMultiSelection-CmChJsos.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const FIELD_KEY = Symbol("b-field");
function useFieldContext() {
  return inject(FIELD_KEY, null);
}
function fieldControlAttrs(field, attrs) {
  if (!field) return {};
  const describedBy = [field.hintId, field.errorId].filter(Boolean).join(" ");
  return {
    ...field.id && attrs.id === void 0 && { id: field.id },
    ...describedBy && attrs["aria-describedby"] === void 0 && { "aria-describedby": describedBy },
    ...field.invalid && attrs["aria-invalid"] === void 0 && { "aria-invalid": "true" },
    ...field.required && attrs.required === void 0 && { required: true }
  };
}
const BCheckbox = defineComponent({
  name: "BCheckbox",
  inheritAttrs: false,
  props: {
    modelValue: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    value: { type: String, default: null },
    name: { type: String, default: null },
    id: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(props, { slots, attrs, emit }) {
    const field = useFieldContext();
    return () => {
      const { class: extraClass, ...restAttrs } = attrs;
      const isDisabled = props.disabled || (field == null ? void 0 : field.disabled);
      return h("label", {
        class: ["b-checkbox", extraClass],
        ...isDisabled && { "data-disabled": "" }
      }, [
        h("input", {
          ...fieldControlAttrs(field, { ...restAttrs, ...props.id && { id: props.id } }),
          ...restAttrs,
          type: "checkbox",
          checked: props.modelValue,
          disabled: isDisabled || void 0,
          ...props.value && { value: props.value },
          ...props.name && { name: props.name },
          ...props.id && { id: props.id },
          onChange: (e) => emit("update:modelValue", e.target.checked)
        }),
        slots.default ? h("span", { class: "label" }, slots.default()) : null
      ]);
    };
  }
});
function defaultCompare(a, b) {
  const aNull = a === null || a === void 0 || a === "";
  const bNull = b === null || b === void 0 || b === "";
  if (aNull && bNull) return 0;
  if (aNull) return 1;
  if (bNull) return -1;
  if (typeof a === "number" && typeof b === "number") return a - b;
  if (a instanceof Date && b instanceof Date) return a - b;
  return String(a).localeCompare(String(b), void 0, { numeric: true, sensitivity: "base" });
}
function sortRows(rows, column, dir) {
  const factor = dir === "desc" ? -1 : 1;
  return [...rows].sort((rowA, rowB) => {
    if (column.sorter) return factor * column.sorter(rowA, rowB, dir);
    return factor * defaultCompare(rowA[column.key], rowB[column.key]);
  });
}
const DEFAULT_WIDTH = 120;
const MIN_WIDTH = 60;
const BODY_CLASS = "c-data-table-resizing";
function useColumnResize({ columns, getWidths, onCommit, isRTL }) {
  const resizing = ref(null);
  const liveWidths = ref({});
  function colDef(key) {
    return columns.value.find((c) => c.key === key);
  }
  function defaultWidth(key) {
    var _a;
    return ((_a = colDef(key)) == null ? void 0 : _a.width) ?? DEFAULT_WIDTH;
  }
  function minWidth(key) {
    var _a;
    return ((_a = colDef(key)) == null ? void 0 : _a.minWidth) ?? MIN_WIDTH;
  }
  function effectiveWidth(key) {
    if (resizing.value) return liveWidths.value[key] ?? getWidths()[key] ?? defaultWidth(key);
    return getWidths()[key] ?? defaultWidth(key);
  }
  function start(event, col) {
    event.preventDefault();
    event.stopPropagation();
    const widths = getWidths();
    const seed = {};
    for (const c of columns.value) seed[c.key] = widths[c.key] ?? c.width ?? DEFAULT_WIDTH;
    liveWidths.value = seed;
    resizing.value = {
      key: col.key,
      startX: event.clientX,
      startWidth: seed[col.key],
      min: minWidth(col.key),
      dir: isRTL() ? -1 : 1
    };
    document.body.classList.add(BODY_CLASS);
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", end);
  }
  function move(event) {
    if (!resizing.value) return;
    const { key, startX, startWidth, min, dir } = resizing.value;
    const delta = (event.clientX - startX) * dir;
    liveWidths.value = { ...liveWidths.value, [key]: Math.max(min, startWidth + delta) };
  }
  function end() {
    cleanup();
    if (resizing.value) {
      resizing.value = null;
      onCommit({ ...liveWidths.value });
    }
  }
  function cleanup() {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", end);
    document.body.classList.remove(BODY_CLASS);
  }
  onBeforeUnmount(() => {
    cleanup();
    resizing.value = null;
  });
  return { resizing, effectiveWidth, start, MIN_WIDTH };
}
function useColumnOrder({ getOrder, onReorder, isRTL }) {
  const dragKey = ref(null);
  const dropTarget = ref(null);
  function onDragStart(event, col) {
    if (event.target.closest(".c-data-table__resize")) {
      event.preventDefault();
      return;
    }
    if (col.reorderable === false) {
      event.preventDefault();
      return;
    }
    dragKey.value = col.key;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", col.key);
  }
  function onDragOver(event, col) {
    if (!dragKey.value || col.reorderable === false) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    if (col.key === dragKey.value) {
      dropTarget.value = null;
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const beforeHalf = event.clientX < rect.left + rect.width / 2;
    const side = beforeHalf !== isRTL() ? "before" : "after";
    dropTarget.value = { key: col.key, side };
  }
  function onDrop() {
    if (!dragKey.value || !dropTarget.value) {
      reset();
      return;
    }
    const { key: targetKey, side } = dropTarget.value;
    const order = getOrder().filter((k) => k !== dragKey.value);
    const index = order.indexOf(targetKey);
    if (index === -1) {
      reset();
      return;
    }
    order.splice(side === "after" ? index + 1 : index, 0, dragKey.value);
    onReorder(order);
    reset();
  }
  function onDragEnd() {
    reset();
  }
  function reset() {
    dragKey.value = null;
    dropTarget.value = null;
  }
  return { dragKey, dropTarget, onDragStart, onDragOver, onDrop, onDragEnd };
}
function useRowDrag({ getVisibleKeys, isSelected, selectOnly, onReorder }) {
  const draggingKeys = ref(null);
  const dropTarget = ref(null);
  function onDragStart(event, key) {
    if (!isSelected(key)) selectOnly(key);
    draggingKeys.value = getVisibleKeys().filter((k) => isSelected(k) || k === key);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(draggingKeys.value.length));
  }
  function onDragOver(event, key) {
    if (!draggingKeys.value) return;
    if (draggingKeys.value.includes(key)) {
      dropTarget.value = null;
      return;
    }
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    const rect = event.currentTarget.getBoundingClientRect();
    const position = event.clientY < rect.top + rect.height / 2 ? "before" : "after";
    dropTarget.value = { key, position };
  }
  function onDrop() {
    if (!draggingKeys.value || !dropTarget.value) {
      reset();
      return;
    }
    onReorder({
      keys: [...draggingKeys.value],
      targetKey: dropTarget.value.key,
      position: dropTarget.value.position
    });
    reset();
  }
  function onDragEnd() {
    reset();
  }
  function reset() {
    draggingKeys.value = null;
    dropTarget.value = null;
  }
  return { draggingKeys, dropTarget, onDragStart, onDragOver, onDrop, onDragEnd };
}
const SCHEMA_VERSION = 1;
const SAVE_DEBOUNCE_MS = 200;
function useTableStorage(storageKey) {
  const key = storageKey ? `c-data-table:${storageKey}` : null;
  let timer = null;
  function load() {
    if (!key || typeof window === "undefined") return null;
    try {
      const data = JSON.parse(window.localStorage.getItem(key) ?? "null");
      if (!data || data.v !== SCHEMA_VERSION) return null;
      return data;
    } catch {
      return null;
    }
  }
  function save({ widths, hidden, order }) {
    if (!key || typeof window === "undefined") return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      try {
        window.localStorage.setItem(
          key,
          JSON.stringify({ v: SCHEMA_VERSION, widths, hidden, order })
        );
      } catch {
      }
    }, SAVE_DEBOUNCE_MS);
  }
  return { enabled: Boolean(key), load, save };
}
const _sfc_main = {
  __name: "c-data-table",
  props: {
    columns: { type: Array, required: true },
    rows: { type: Array, required: true },
    rowKey: { type: String, default: "id" },
    // Comportamiento
    selectable: { type: Boolean, default: false },
    selectionColumn: { type: Boolean, default: false },
    rowsDraggable: { type: Boolean, default: false },
    sortMode: { type: String, default: "internal" },
    // 'internal' | 'external'
    stickyHeader: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    showScrollToTop: { type: Boolean, default: false },
    storageKey: { type: String, default: null },
    // Estado opcionalmente controlado (v-model); undefined = modo interno
    sortKey: { type: String, default: void 0 },
    sortDir: { type: String, default: void 0 },
    selectedKeys: { type: Array, default: void 0 },
    hiddenColumns: { type: Array, default: void 0 },
    columnWidths: { type: Object, default: void 0 },
    columnOrder: { type: Array, default: void 0 },
    // Variantes visuales (se vuelcan como data-* en el elemento raíz)
    density: { type: String, default: null },
    striped: { type: Boolean, default: false },
    bordered: { type: Boolean, default: false },
    // Textos (i18n)
    textLoading: { type: String, default: "Cargando…" },
    textEmpty: { type: String, default: "No hay datos" },
    textColumnsMenu: { type: String, default: "Columnas" },
    labelSelectAll: { type: String, default: "Seleccionar todas las filas" },
    labelSelectRow: { type: String, default: "Seleccionar fila" },
    labelSortBy: { type: String, default: "Ordenar por" },
    labelScrollTop: { type: String, default: "Volver arriba" }
  },
  emits: [
    "update:sortKey",
    "update:sortDir",
    "update:selectedKeys",
    "update:hiddenColumns",
    "update:columnWidths",
    "update:columnOrder",
    "sort",
    "row-click",
    "row-dblclick",
    "row-contextmenu",
    "rows-reorder"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const slots = useSlots();
    const wrapEl = ref(null);
    const storage = useTableStorage(props.storageKey);
    const stored = storage.load();
    function knownKeys(keys) {
      return keys.filter((k) => props.columns.some((c) => c.key === k));
    }
    const initialHidden = stored ? knownKeys(stored.hidden ?? []) : [];
    const initialOrder = stored ? knownKeys(stored.order ?? []) : props.columns.map((c) => c.key);
    const initialWidths = stored ? Object.fromEntries(Object.entries(stored.widths ?? {}).filter(([k]) => props.columns.some((c) => c.key === k))) : {};
    const hiddenModel = useOptionalModel(props, "hiddenColumns", emit, initialHidden);
    const widthsModel = useOptionalModel(props, "columnWidths", emit, initialWidths);
    const orderModel = useOptionalModel(props, "columnOrder", emit, initialOrder);
    const sortKeyModel = useOptionalModel(props, "sortKey", emit, null);
    const sortDirModel = useOptionalModel(props, "sortDir", emit, "asc");
    const selectedModel = useOptionalModel(props, "selectedKeys", emit, []);
    if (storage.enabled) {
      watch(
        [hiddenModel, widthsModel, orderModel],
        ([hidden, widths, order]) => storage.save({ hidden, widths, order }),
        { deep: true }
      );
    }
    const orderedColumns = computed(() => {
      const byKey = new Map(props.columns.map((c) => [c.key, c]));
      const order = (orderModel.value ?? []).filter((k) => byKey.has(k));
      const rest = props.columns.map((c) => c.key).filter((k) => !order.includes(k));
      return [...order, ...rest].map((k) => byKey.get(k));
    });
    const visibleColumns = computed(
      () => orderedColumns.value.filter((c) => !(hiddenModel.value ?? []).includes(c.key))
    );
    const hideableColumns = computed(() => orderedColumns.value.filter((c) => c.hideable !== false));
    function isHidden(key) {
      return (hiddenModel.value ?? []).includes(key);
    }
    function toggleColumn(key) {
      const hidden = hiddenModel.value ?? [];
      hiddenModel.value = hidden.includes(key) ? hidden.filter((k) => k !== key) : [...hidden, key];
    }
    const sortedColumn = computed(() => props.columns.find((c) => c.key === sortKeyModel.value));
    const displayRows = computed(() => {
      if (props.sortMode === "internal" && sortedColumn.value) {
        return sortRows(props.rows, sortedColumn.value, sortDirModel.value || "asc");
      }
      return props.rows;
    });
    function toggleSort(col) {
      if (sortKeyModel.value === col.key) {
        sortDirModel.value = sortDirModel.value === "asc" ? "desc" : "asc";
      } else {
        sortKeyModel.value = col.key;
        sortDirModel.value = "asc";
      }
      emit("sort", { key: sortKeyModel.value, dir: sortDirModel.value });
    }
    function ariaSort(col) {
      if (sortKeyModel.value !== col.key) return void 0;
      return sortDirModel.value === "desc" ? "descending" : "ascending";
    }
    function keyOf(row) {
      return row[props.rowKey];
    }
    const visibleKeys = computed(() => displayRows.value.map(keyOf));
    const selection = useMultiSelection(visibleKeys, selectedModel);
    const { allSelected } = selection;
    function isRowSelected(key) {
      if (!props.selectable && !props.selectionColumn) return false;
      return selection.isSelected(key);
    }
    function toggleAll() {
      if (selection.allSelected.value) selection.clear();
      else selection.selectAll();
    }
    const selectAllEl = ref(null);
    watchPostEffect(() => {
      var _a;
      const input = (_a = selectAllEl.value) == null ? void 0 : _a.querySelector("input");
      if (input) input.indeterminate = selection.someSelected.value;
    });
    function onRowClick(event, row, index) {
      if (props.selectable) selection.handleClick(keyOf(row), event);
      emit("row-click", { row, key: keyOf(row), index, event });
    }
    function onRowDblclick(event, row, index) {
      emit("row-dblclick", { row, key: keyOf(row), index, event });
    }
    function isRTL() {
      return wrapEl.value ? getComputedStyle(wrapEl.value).direction === "rtl" : false;
    }
    const resize = useColumnResize({
      columns: computed(() => props.columns),
      getWidths: () => widthsModel.value ?? {},
      onCommit: (widths) => {
        widthsModel.value = widths;
      },
      isRTL
    });
    const { effectiveWidth, MIN_WIDTH: MIN_WIDTH2 } = resize;
    const columnDnd = useColumnOrder({
      getOrder: () => orderedColumns.value.map((c) => c.key),
      onReorder: (order) => {
        orderModel.value = order;
      },
      isRTL
    });
    const rowsDragEnabled = computed(() => props.rowsDraggable && !sortKeyModel.value);
    const rowDnd = useRowDrag({
      getVisibleKeys: () => visibleKeys.value,
      isSelected: (key) => (props.selectable || props.selectionColumn) && selection.isSelected(key),
      selectOnly: (key) => {
        if (props.selectable || props.selectionColumn) selection.selectOnly(key);
      },
      onReorder: (payload) => emit("rows-reorder", payload)
    });
    const columnsMenu = ref(null);
    const popoverEl = ref(null);
    const rowMenu = ref(null);
    const rowMenuEl = ref(null);
    function clampToViewport(el, pos) {
      const rect = el.getBoundingClientRect();
      return {
        ...pos,
        x: Math.max(8, Math.min(pos.x, window.innerWidth - rect.width - 8)),
        y: Math.max(8, Math.min(pos.y, window.innerHeight - rect.height - 8))
      };
    }
    function openColumnsMenu(event) {
      columnsMenu.value = { x: event.clientX, y: event.clientY };
      nextTick(() => {
        var _a;
        if (!popoverEl.value || !columnsMenu.value) return;
        columnsMenu.value = clampToViewport(popoverEl.value, columnsMenu.value);
        (_a = popoverEl.value.querySelector("input")) == null ? void 0 : _a.focus();
      });
    }
    function onRowContextmenu(event, row, index) {
      const td = event.target.closest("td");
      const colKey = (td == null ? void 0 : td.dataset.key) ?? null;
      const column = colKey ? props.columns.find((c) => c.key === colKey) ?? null : null;
      if (slots["row-menu"]) {
        event.preventDefault();
        rowMenu.value = { x: event.clientX, y: event.clientY, row, column, key: keyOf(row), index };
        nextTick(() => {
          if (rowMenuEl.value && rowMenu.value) {
            rowMenu.value = clampToViewport(rowMenuEl.value, rowMenu.value);
          }
        });
      }
      emit("row-contextmenu", {
        row,
        key: keyOf(row),
        index,
        column,
        x: event.clientX,
        y: event.clientY,
        event
      });
    }
    function closeRowMenu() {
      rowMenu.value = null;
    }
    function onMenuKeydown(event) {
      var _a;
      if (event.key === "Escape") {
        columnsMenu.value = null;
        rowMenu.value = null;
        (_a = wrapEl.value) == null ? void 0 : _a.focus();
      }
    }
    watch(
      () => Boolean(columnsMenu.value || rowMenu.value),
      (open) => {
        if (open) document.addEventListener("keydown", onMenuKeydown);
        else document.removeEventListener("keydown", onMenuKeydown);
      }
    );
    const topButtonVisible = ref(false);
    function onWrapScroll() {
      var _a;
      topButtonVisible.value = (((_a = wrapEl.value) == null ? void 0 : _a.scrollTop) ?? 0) > 200;
    }
    function scrollToTop() {
      var _a;
      (_a = wrapEl.value) == null ? void 0 : _a.scrollTo({ top: 0, behavior: "smooth" });
    }
    onBeforeUnmount(() => {
      document.removeEventListener("keydown", onMenuKeydown);
    });
    __expose({ visibleColumns, effectiveWidth });
    const __returned__ = { props, emit, slots, wrapEl, storage, stored, knownKeys, initialHidden, initialOrder, initialWidths, hiddenModel, widthsModel, orderModel, sortKeyModel, sortDirModel, selectedModel, orderedColumns, visibleColumns, hideableColumns, isHidden, toggleColumn, sortedColumn, displayRows, toggleSort, ariaSort, keyOf, visibleKeys, selection, allSelected, isRowSelected, toggleAll, selectAllEl, onRowClick, onRowDblclick, isRTL, resize, effectiveWidth, MIN_WIDTH: MIN_WIDTH2, columnDnd, rowsDragEnabled, rowDnd, columnsMenu, popoverEl, rowMenu, rowMenuEl, clampToViewport, openColumnsMenu, onRowContextmenu, closeRowMenu, onMenuKeydown, topButtonVisible, onWrapScroll, scrollToTop, ref, computed, watch, nextTick, useSlots, onBeforeUnmount, watchPostEffect, get BCheckbox() {
      return BCheckbox;
    }, get useOptionalModel() {
      return useOptionalModel;
    }, get useMultiSelection() {
      return useMultiSelection;
    }, get sortRows() {
      return sortRows;
    }, get useColumnResize() {
      return useColumnResize;
    }, get useColumnOrder() {
      return useColumnOrder;
    }, get useRowDrag() {
      return useRowDrag;
    }, get useTableStorage() {
      return useTableStorage;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = ["data-density", "data-striped", "data-bordered", "data-loading", "data-sticky"];
const _hoisted_2 = ["aria-busy"];
const _hoisted_3 = { class: "c-data-table__table" };
const _hoisted_4 = {
  key: 0,
  class: "c-data-table__col-selection"
};
const _hoisted_5 = { class: "c-data-table__head" };
const _hoisted_6 = {
  key: 0,
  class: "c-data-table__th",
  "data-selection": "",
  scope: "col"
};
const _hoisted_7 = {
  ref: "selectAllEl",
  class: "c-data-table__select-all"
};
const _hoisted_8 = ["draggable", "data-align", "data-sorted", "data-dragging", "data-drop", "data-resizing", "aria-sort", "onDragstart", "onDragover"];
const _hoisted_9 = ["aria-label", "onClick"];
const _hoisted_10 = { class: "c-data-table__th-label" };
const _hoisted_11 = {
  key: 1,
  class: "c-data-table__th-label"
};
const _hoisted_12 = ["onPointerdown"];
const _hoisted_13 = { class: "c-data-table__body" };
const _hoisted_14 = ["data-selected", "data-clickable", "data-dragging", "data-drop", "draggable", "onClick", "onDblclick", "onContextmenu", "onDragstart", "onDragover"];
const _hoisted_15 = ["data-key", "data-align"];
const _hoisted_16 = {
  key: 0,
  class: "c-data-table__state",
  "data-state": "loading"
};
const _hoisted_17 = {
  key: 1,
  class: "c-data-table__state",
  "data-state": "empty"
};
const _hoisted_18 = ["aria-label"];
const _hoisted_19 = ["aria-label"];
const _hoisted_20 = { class: "c-data-table__popover-title" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "c-data-table",
    "data-density": $props.density || void 0,
    "data-striped": $props.striped || void 0,
    "data-bordered": $props.bordered || void 0,
    "data-loading": $props.loading || void 0,
    "data-sticky": $props.stickyHeader || void 0
  }, [
    createBaseVNode("div", {
      ref: "wrapEl",
      class: "c-data-table__wrap",
      tabindex: "-1",
      "aria-busy": $props.loading || void 0,
      onScrollPassive: $setup.onWrapScroll
    }, [
      createBaseVNode("table", _hoisted_3, [
        createBaseVNode("colgroup", null, [
          $props.selectionColumn ? (openBlock(), createElementBlock("col", _hoisted_4)) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.visibleColumns, (col) => {
              return openBlock(), createElementBlock(
                "col",
                {
                  key: col.key,
                  style: normalizeStyle({
                    width: $setup.effectiveWidth(col.key) + "px",
                    minWidth: (col.minWidth ?? $setup.MIN_WIDTH) + "px"
                  })
                },
                null,
                4
                /* STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          renderSlot(_ctx.$slots, "append-col")
        ]),
        createBaseVNode("thead", _hoisted_5, [
          createBaseVNode(
            "tr",
            {
              onContextmenu: withModifiers($setup.openColumnsMenu, ["prevent"])
            },
            [
              $props.selectionColumn ? (openBlock(), createElementBlock("th", _hoisted_6, [
                createBaseVNode(
                  "span",
                  _hoisted_7,
                  [
                    createVNode($setup["BCheckbox"], {
                      "model-value": $setup.allSelected,
                      "aria-label": $props.labelSelectAll,
                      "onUpdate:modelValue": $setup.toggleAll
                    }, null, 8, ["model-value", "aria-label"])
                  ],
                  512
                  /* NEED_PATCH */
                )
              ])) : createCommentVNode("v-if", true),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.visibleColumns, (col) => {
                  var _a, _b;
                  return openBlock(), createElementBlock("th", {
                    key: col.key,
                    class: "c-data-table__th",
                    scope: "col",
                    draggable: col.reorderable !== false || void 0,
                    "data-align": col.align || void 0,
                    "data-sorted": $setup.sortKeyModel === col.key ? $setup.sortDirModel || "asc" : void 0,
                    "data-dragging": $setup.columnDnd.dragKey.value === col.key || void 0,
                    "data-drop": ((_a = $setup.columnDnd.dropTarget.value) == null ? void 0 : _a.key) === col.key ? $setup.columnDnd.dropTarget.value.side : void 0,
                    "data-resizing": ((_b = $setup.resize.resizing.value) == null ? void 0 : _b.key) === col.key || void 0,
                    "aria-sort": $setup.ariaSort(col),
                    onDragstart: ($event) => $setup.columnDnd.onDragStart($event, col),
                    onDragover: ($event) => $setup.columnDnd.onDragOver($event, col),
                    onDrop: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.columnDnd.onDrop(), ["prevent"])),
                    onDragend: _cache[1] || (_cache[1] = ($event) => $setup.columnDnd.onDragEnd())
                  }, [
                    col.sortable ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      type: "button",
                      class: "c-data-table__sort-button",
                      "aria-label": `${$props.labelSortBy} ${col.label}`,
                      onClick: ($event) => $setup.toggleSort(col)
                    }, [
                      createBaseVNode("span", _hoisted_10, [
                        renderSlot(_ctx.$slots, `header-${col.key}`, { column: col }, () => [
                          createTextVNode(
                            toDisplayString(col.label),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      _cache[11] || (_cache[11] = createBaseVNode(
                        "span",
                        {
                          class: "c-data-table__sort-indicator",
                          "aria-hidden": "true"
                        },
                        null,
                        -1
                        /* CACHED */
                      ))
                    ], 8, _hoisted_9)) : (openBlock(), createElementBlock("span", _hoisted_11, [
                      renderSlot(_ctx.$slots, `header-${col.key}`, { column: col }, () => [
                        createTextVNode(
                          toDisplayString(col.label),
                          1
                          /* TEXT */
                        )
                      ])
                    ])),
                    col.resizable !== false ? (openBlock(), createElementBlock("span", {
                      key: 2,
                      class: "c-data-table__resize",
                      onPointerdown: withModifiers(($event) => $setup.resize.start($event, col), ["stop"])
                    }, null, 40, _hoisted_12)) : createCommentVNode("v-if", true)
                  ], 40, _hoisted_8);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              renderSlot(_ctx.$slots, "append-th")
            ],
            32
            /* NEED_HYDRATION */
          )
        ]),
        createBaseVNode("tbody", _hoisted_13, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.displayRows, (row, index) => {
              var _a, _b;
              return openBlock(), createElementBlock("tr", {
                key: $setup.keyOf(row),
                class: "c-data-table__row",
                "data-selected": $setup.isRowSelected($setup.keyOf(row)) || void 0,
                "data-clickable": $props.selectable || void 0,
                "data-dragging": ((_a = $setup.rowDnd.draggingKeys.value) == null ? void 0 : _a.includes($setup.keyOf(row))) || void 0,
                "data-drop": ((_b = $setup.rowDnd.dropTarget.value) == null ? void 0 : _b.key) === $setup.keyOf(row) ? $setup.rowDnd.dropTarget.value.position : void 0,
                draggable: $setup.rowsDragEnabled || void 0,
                onClick: ($event) => $setup.onRowClick($event, row, index),
                onDblclick: ($event) => $setup.onRowDblclick($event, row, index),
                onContextmenu: ($event) => $setup.onRowContextmenu($event, row, index),
                onDragstart: ($event) => $setup.rowsDragEnabled && $setup.rowDnd.onDragStart($event, $setup.keyOf(row)),
                onDragover: ($event) => $setup.rowsDragEnabled && $setup.rowDnd.onDragOver($event, $setup.keyOf(row)),
                onDrop: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.rowsDragEnabled && $setup.rowDnd.onDrop(), ["prevent"])),
                onDragend: _cache[4] || (_cache[4] = ($event) => $setup.rowsDragEnabled && $setup.rowDnd.onDragEnd())
              }, [
                $props.selectionColumn ? (openBlock(), createElementBlock("td", {
                  key: 0,
                  class: "c-data-table__td",
                  "data-selection": "",
                  onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  createVNode($setup["BCheckbox"], {
                    "model-value": $setup.isRowSelected($setup.keyOf(row)),
                    "aria-label": $props.labelSelectRow,
                    "onUpdate:modelValue": ($event) => $setup.selection.toggle($setup.keyOf(row))
                  }, null, 8, ["model-value", "aria-label", "onUpdate:modelValue"])
                ])) : createCommentVNode("v-if", true),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.visibleColumns, (col) => {
                    return openBlock(), createElementBlock("td", {
                      key: col.key,
                      class: "c-data-table__td",
                      "data-key": col.key,
                      "data-align": col.align || void 0
                    }, [
                      renderSlot(_ctx.$slots, `cell-${col.key}`, {
                        row,
                        value: row[col.key],
                        column: col,
                        index
                      }, () => [
                        createTextVNode(
                          toDisplayString(row[col.key]),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 8, _hoisted_15);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                renderSlot(_ctx.$slots, "append-td", {
                  row,
                  index
                })
              ], 40, _hoisted_14);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      $props.loading ? (openBlock(), createElementBlock("div", _hoisted_16, [
        renderSlot(_ctx.$slots, "loading", {}, () => [
          createTextVNode(
            toDisplayString($props.textLoading),
            1
            /* TEXT */
          )
        ])
      ])) : !$setup.displayRows.length ? (openBlock(), createElementBlock("div", _hoisted_17, [
        renderSlot(_ctx.$slots, "empty", {}, () => [
          createTextVNode(
            toDisplayString($props.textEmpty),
            1
            /* TEXT */
          )
        ])
      ])) : createCommentVNode("v-if", true)
    ], 40, _hoisted_2),
    $props.showScrollToTop && $setup.topButtonVisible ? (openBlock(), createElementBlock("button", {
      key: 0,
      type: "button",
      class: "c-data-table__scroll-top",
      "aria-label": $props.labelScrollTop,
      onClick: $setup.scrollToTop
    }, "↑", 8, _hoisted_18)) : createCommentVNode("v-if", true),
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      $setup.columnsMenu ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          createBaseVNode(
            "div",
            {
              class: "c-data-table__backdrop",
              onClick: _cache[5] || (_cache[5] = ($event) => $setup.columnsMenu = null),
              onContextmenu: _cache[6] || (_cache[6] = withModifiers(($event) => $setup.columnsMenu = null, ["prevent"]))
            },
            null,
            32
            /* NEED_HYDRATION */
          ),
          createBaseVNode("div", {
            ref: "popoverEl",
            class: "c-data-table__popover",
            role: "dialog",
            "aria-label": $props.textColumnsMenu,
            style: normalizeStyle({ left: $setup.columnsMenu.x + "px", top: $setup.columnsMenu.y + "px" }),
            onClick: _cache[7] || (_cache[7] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createBaseVNode(
              "p",
              _hoisted_20,
              toDisplayString($props.textColumnsMenu),
              1
              /* TEXT */
            ),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.hideableColumns, (col) => {
                return openBlock(), createBlock($setup["BCheckbox"], {
                  key: col.key,
                  class: "c-data-table__popover-item",
                  "model-value": !$setup.isHidden(col.key),
                  "onUpdate:modelValue": ($event) => $setup.toggleColumn(col.key)
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(col.label),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["model-value", "onUpdate:modelValue"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 12, _hoisted_19)
        ],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true),
      $setup.rowMenu ? (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createBaseVNode(
            "div",
            {
              class: "c-data-table__backdrop",
              onClick: _cache[8] || (_cache[8] = ($event) => $setup.rowMenu = null),
              onContextmenu: _cache[9] || (_cache[9] = withModifiers(($event) => $setup.rowMenu = null, ["prevent"]))
            },
            null,
            32
            /* NEED_HYDRATION */
          ),
          createBaseVNode(
            "div",
            {
              ref: "rowMenuEl",
              class: "c-data-table__popover",
              role: "menu",
              style: normalizeStyle({ left: $setup.rowMenu.x + "px", top: $setup.rowMenu.y + "px" }),
              onClick: _cache[10] || (_cache[10] = withModifiers(() => {
              }, ["stop"]))
            },
            [
              renderSlot(_ctx.$slots, "row-menu", {
                row: $setup.rowMenu.row,
                column: $setup.rowMenu.column,
                rowKey: $setup.rowMenu.key,
                index: $setup.rowMenu.index,
                close: $setup.closeRowMenu
              })
            ],
            4
            /* STYLE */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true)
    ]))
  ], 8, _hoisted_1);
}
_sfc_main.__file = "src/components/data/data-table/c-data-table.vue";
const CDataTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/data/data-table/c-data-table.vue"]]);
export {
  CDataTable as C,
  fieldControlAttrs as f,
  sortRows as s,
  useFieldContext as u
};
