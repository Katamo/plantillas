import { J as defineComponent, R as h, aV as watchPostEffect, ak as ref, ac as openBlock, r as createElementBlock, z as createVNode, u as createSlots, an as renderList, aX as withCtx, ap as renderSlot, a0 as normalizeProps, P as guardReactiveProps, Y as mergeProps, l as createBaseVNode, ay as toDisplayString, p as createCommentVNode, n as createBlock, i as computed, aT as watch, ar as resolveComponent } from "./vendor-DbHuLTxc.js";
import { u as useFieldContext, f as fieldControlAttrs, s as sortRows, C as CDataTable } from "./c-data-table-D7LJlutG.js";
import { u as useOptionalModel } from "./useOptionalModel-CSCs5AM0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useMultiSelection-CmChJsos.js";
const BPagination = defineComponent({
  name: "BPagination",
  inheritAttrs: false,
  props: {
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true },
    disabled: { type: Boolean, default: false },
    siblings: { type: Number, default: null }
  },
  emits: ["update:currentPage"],
  setup(props, { slots, attrs, emit }) {
    const pageList = () => {
      const { totalPages: total, currentPage: current, siblings } = props;
      if (siblings == null) {
        return Array.from({ length: total }, (_, i) => i + 1);
      }
      const visible = /* @__PURE__ */ new Set([1, total]);
      for (let i = current - siblings; i <= current + siblings; i++) {
        if (i >= 1 && i <= total) visible.add(i);
      }
      const sorted = [...visible].sort((a, b) => a - b);
      const out = [];
      let prev = 0;
      for (const page of sorted) {
        if (page - prev === 2) out.push(prev + 1);
        else if (page - prev > 2) out.push("ellipsis");
        out.push(page);
        prev = page;
      }
      return out;
    };
    return () => {
      var _a, _b;
      const { class: extraClass, ...restAttrs } = attrs;
      const goTo = (page) => {
        if (!props.disabled && page >= 1 && page <= props.totalPages && page !== props.currentPage) {
          emit("update:currentPage", page);
        }
      };
      const prevDisabled = props.disabled || props.currentPage <= 1;
      const nextDisabled = props.disabled || props.currentPage >= props.totalPages;
      const items = pageList().map(
        (page, index) => {
          var _a2;
          return page === "ellipsis" ? h(
            "li",
            { key: `ellipsis-${index}`, class: "ellipsis", "aria-hidden": "true" },
            ((_a2 = slots.ellipsis) == null ? void 0 : _a2.call(slots)) ?? "…"
          ) : h(
            "li",
            { key: page },
            h(
              "button",
              {
                class: "page",
                type: "button",
                disabled: props.disabled || void 0,
                "aria-current": page === props.currentPage ? "page" : void 0,
                ...page === props.currentPage ? { "data-current": "" } : {},
                onClick: () => goTo(page)
              },
              slots.page ? slots.page({ page, current: props.currentPage }) : String(page)
            )
          );
        }
      );
      return h("nav", {
        ...restAttrs,
        class: ["b-pagination", extraClass],
        "aria-label": attrs["aria-label"] ?? "Pagination",
        ...props.disabled ? { "data-disabled": "" } : {}
      }, [
        h("button", {
          class: "prev",
          type: "button",
          disabled: prevDisabled || void 0,
          "aria-label": "Previous page",
          ...prevDisabled ? { "data-disabled": "" } : {},
          onClick: () => goTo(props.currentPage - 1)
        }, ((_a = slots.prev) == null ? void 0 : _a.call(slots)) ?? "‹"),
        h("ul", { class: "pages" }, items),
        h("button", {
          class: "next",
          type: "button",
          disabled: nextDisabled || void 0,
          "aria-label": "Next page",
          ...nextDisabled ? { "data-disabled": "" } : {},
          onClick: () => goTo(props.currentPage + 1)
        }, ((_b = slots.next) == null ? void 0 : _b.call(slots)) ?? "›")
      ]);
    };
  }
});
const BSelect = defineComponent({
  name: "BSelect",
  inheritAttrs: false,
  props: {
    // Sin restricción de tipo: el v-model puede llevar valores tipados
    // (number, null…) igual que el select nativo de Vue
    modelValue: { default: "" },
    options: { type: Array, default: null },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(props, { slots, attrs, emit }) {
    const field = useFieldContext();
    const el = ref(null);
    watchPostEffect(() => {
      if (el.value) el.value.value = String(props.modelValue ?? "");
    });
    return () => {
      var _a;
      const children = props.options ? props.options.map((opt) => {
        const isObject = typeof opt === "object" && opt !== null;
        const value = isObject ? opt.value : opt;
        return h("option", {
          key: value,
          value,
          disabled: isObject && opt.disabled || void 0
        }, String(isObject ? opt.label ?? opt.value : opt));
      }) : (_a = slots.default) == null ? void 0 : _a.call(slots);
      return h("select", {
        ...fieldControlAttrs(field, attrs),
        ...attrs,
        ref: el,
        class: ["b-select", attrs.class],
        disabled: props.disabled || (field == null ? void 0 : field.disabled) || void 0,
        // Vue guarda el valor tipado del <option> en `_value` (runtime-dom):
        // preferirlo preserva numbers/null en el v-model, como hace el
        // v-model nativo de Vue sobre <select>
        onChange: (e) => {
          const opt = e.target.selectedOptions[0];
          emit("update:modelValue", opt && "_value" in opt ? opt._value : e.target.value);
        }
      }, children);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "m-data-table",
  props: {
    columns: { type: Array, required: true },
    rows: { type: Array, required: true },
    // 'client': recibe todas las filas y ordena/pagina internamente.
    // 'server': recibe la página actual + total y solo emite los cambios.
    mode: { type: String, default: "client" },
    // Estado opcionalmente controlado (v-model)
    page: { type: Number, default: void 0 },
    pageSize: { type: Number, default: void 0 },
    pageSizeOptions: { type: Array, default: () => [10, 25, 50, 100] },
    total: { type: Number, default: null },
    // solo modo server
    siblings: { type: Number, default: 1 },
    // páginas visibles a cada lado en BPagination
    // Textos (i18n): «1–25 de 312» · «25 · por página»
    textPerPage: { type: String, default: "por página" },
    textOf: { type: String, default: "de" }
  },
  emits: ["update:page", "update:pageSize", "sort"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const pageModel = useOptionalModel(props, "page", emit, 1);
    const pageSizeModel = useOptionalModel(props, "pageSize", emit, 25);
    const sortKey = ref(null);
    const sortDir = ref("asc");
    const sortedRows = computed(() => {
      if (props.mode !== "client") return props.rows;
      const column = props.columns.find((c) => c.key === sortKey.value);
      return column ? sortRows(props.rows, column, sortDir.value) : props.rows;
    });
    const totalItems = computed(
      () => props.mode === "server" ? props.total ?? props.rows.length : props.rows.length
    );
    const totalPages = computed(() => Math.max(1, Math.ceil(totalItems.value / pageSizeModel.value)));
    const pagedRows = computed(() => {
      if (props.mode === "server") return props.rows;
      const start = (pageModel.value - 1) * pageSizeModel.value;
      return sortedRows.value.slice(start, start + pageSizeModel.value);
    });
    const rangeText = computed(() => {
      if (!totalItems.value) return "";
      const start = (pageModel.value - 1) * pageSizeModel.value + 1;
      const end = Math.min(pageModel.value * pageSizeModel.value, totalItems.value);
      return `${start}–${end} ${props.textOf} ${totalItems.value}`;
    });
    function onSort({ key, dir }) {
      sortKey.value = key;
      sortDir.value = dir;
      pageModel.value = 1;
      emit("sort", { key, dir });
    }
    watch(pageSizeModel, () => {
      pageModel.value = 1;
    });
    watch(totalPages, (total) => {
      if (pageModel.value > total) pageModel.value = total;
    });
    const __returned__ = { props, emit, pageModel, pageSizeModel, sortKey, sortDir, sortedRows, totalItems, totalPages, pagedRows, rangeText, onSort, ref, computed, watch, get BPagination() {
      return BPagination;
    }, get BSelect() {
      return BSelect;
    }, get CDataTable() {
      return CDataTable;
    }, get sortRows() {
      return sortRows;
    }, get useOptionalModel() {
      return useOptionalModel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "m-data-table" };
const _hoisted_2 = { class: "m-data-table__footer" };
const _hoisted_3 = {
  key: 0,
  class: "m-data-table__range"
};
const _hoisted_4 = { class: "m-data-table__size" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode($setup["CDataTable"], mergeProps(_ctx.$attrs, {
      class: "m-data-table__table",
      columns: $props.columns,
      rows: $setup.pagedRows,
      "sort-mode": "external",
      "sort-key": $setup.sortKey,
      "sort-dir": $setup.sortDir,
      onSort: $setup.onSort
    }), createSlots({
      _: 2
      /* DYNAMIC */
    }, [
      renderList(_ctx.$slots, (_, name) => {
        return {
          name,
          fn: withCtx((scope) => [
            renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(scope ?? {})))
          ])
        };
      })
    ]), 1040, ["columns", "rows", "sort-key", "sort-dir"]),
    createBaseVNode("footer", _hoisted_2, [
      $setup.rangeText ? (openBlock(), createElementBlock(
        "p",
        _hoisted_3,
        toDisplayString($setup.rangeText),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      $setup.totalPages > 1 ? (openBlock(), createBlock($setup["BPagination"], {
        key: 1,
        class: "m-data-table__pagination",
        "current-page": $setup.pageModel,
        "total-pages": $setup.totalPages,
        siblings: $props.siblings,
        "onUpdate:currentPage": _cache[0] || (_cache[0] = ($event) => $setup.pageModel = $event)
      }, null, 8, ["current-page", "total-pages", "siblings"])) : createCommentVNode("v-if", true),
      createBaseVNode("label", _hoisted_4, [
        createVNode($setup["BSelect"], {
          "model-value": $setup.pageSizeModel,
          options: $props.pageSizeOptions,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.pageSizeModel = $event)
        }, null, 8, ["model-value", "options"]),
        createBaseVNode(
          "span",
          null,
          toDisplayString($props.textPerPage),
          1
          /* TEXT */
        )
      ])
    ])
  ]);
}
_sfc_main$1.__file = "src/modules/data/data-table/m-data-table.vue";
const MDataTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/modules/data/data-table/m-data-table.vue"]]);
const docs = '# m-data-table\n\nMódulo que compone [`c-data-table`](../../../components/data/data-table/c-data-table.md) con paginación (`BPagination`) y un selector de tamaño de página (`BSelect`). Soporta dos modos: **cliente** (recibe todas las filas y ordena/pagina internamente) y **servidor** (recibe la página actual + total y emite los cambios para que el consumidor recargue).\n\n## Dependencias\n\n- Plantillas: `c-data-table`, `useOptionalModel`.\n- Bedrock: `BPagination`, `BSelect`.\n\n## Props\n\n| Prop | Tipo | Default | Descripción |\n|---|---|---|---|\n| `columns` | `Array<ColDef>` | — | Requerida. Misma forma que en c-data-table |\n| `rows` | `Array<Object>` | — | Requerida. En modo cliente, TODAS las filas; en servidor, solo la página actual |\n| `mode` | `String` | `\'client\'` | `\'client\'` · `\'server\'` |\n| `page` | `Number` | `1` | `v-model:page` |\n| `pageSize` | `Number` | `25` | `v-model:page-size` |\n| `pageSizeOptions` | `Array<Number>` | `[10, 25, 50, 100]` | Opciones del selector |\n| `total` | `Number` | `null` | Total de elementos (solo modo servidor) |\n| `siblings` | `Number` | `1` | Páginas visibles a cada lado de la actual en BPagination |\n| `textPerPage` | `String` | `\'por página\'` | Etiqueta del selector |\n| `textOf` | `String` | `\'de\'` | Conector del rango («1–25 de 312») |\n\nCualquier otra prop de `c-data-table` (`selectable`, `selection-column`, `storage-key`, `striped`, textos…) **pasa a través** del módulo directamente al componente, igual que sus eventos (`row-dblclick`, `rows-reorder`…) y el `v-model:selected-keys`.\n\n## Eventos\n\n| Evento | Payload | Descripción |\n|---|---|---|\n| `update:page` / `update:pageSize` | `Number` | Cambio de página / tamaño (el tamaño resetea la página a 1) |\n| `sort` | `{ key, dir }` | Cambio de ordenación (resetea la página a 1). En modo servidor el consumidor debe recargar |\n\n## Slots\n\nTodos los slots se reenvían a `c-data-table` (`cell-<key>`, `header-<key>`, `row-menu`, `empty`, `loading`…).\n\n## Uso\n\n### Modo cliente\n\n```html\n<MDataTable :columns="columns" :rows="todasLasFilas" :page-size-options="[10, 20, 50]" />\n```\n\n### Modo servidor\n\n```html\n<MDataTable\n  :columns="columns"\n  :rows="paginaActual"\n  mode="server"\n  :total="totalServidor"\n  :loading="cargando"\n  v-model:page="page"\n  v-model:page-size="pageSize"\n  @sort="recargar"\n/>\n```\n\nEl consumidor observa `page`, `pageSize` y `sort` y pide al servidor la página correspondiente (patrón `useAdminList`).\n\n## CSS Custom Properties\n\n| Propiedad | Default | Descripción |\n|---|---|---|\n| `--m-data-table-footer-gap` | `spacing(4)` | Separación entre rango, paginación y selector |\n| `--m-data-table-footer-padding-y` | `spacing(3)` | Padding vertical del pie |\n\nLas custom properties de `c-data-table`, `BPagination` y `BSelect` aplican igualmente dentro del módulo.\n';
const _sfc_main = {
  __name: "m-data-table.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const GENEROS = ["House", "Techno", "Disco", "Funk", "Ambient", "Jazz"];
    const ARTISTAS = ["Moodymann", "Theo Parrish", "Floating Points", "Kerri Chandler", "Four Tet", "Larry Heard"];
    function makeRows(n) {
      return Array.from({ length: n }, (_, i) => ({
        id: i + 1,
        titulo: `Track ${String(i + 1).padStart(3, "0")}`,
        artista: ARTISTAS[i % ARTISTAS.length],
        genero: GENEROS[i % GENEROS.length],
        año: 1990 + i * 7 % 35
      }));
    }
    const columns = [
      { key: "titulo", label: "Título", width: 200, sortable: true },
      { key: "artista", label: "Artista", width: 160, sortable: true },
      { key: "genero", label: "Género", width: 120 },
      { key: "año", label: "Año", width: 80, align: "right", sortable: true }
    ];
    const clientRows = makeRows(137);
    const ALL = makeRows(83);
    const srvRows = ref([]);
    const srvTotal = ref(0);
    const srvLoading = ref(false);
    const srvPage = ref(1);
    const srvSize = ref(10);
    const srvSort = ref(null);
    function fetchPage() {
      srvLoading.value = true;
      setTimeout(() => {
        var _a;
        let data = [...ALL];
        if ((_a = srvSort.value) == null ? void 0 : _a.key) {
          const { key, dir } = srvSort.value;
          data.sort((a, b) => {
            const cmp = String(a[key]).localeCompare(String(b[key]), void 0, { numeric: true });
            return dir === "desc" ? -cmp : cmp;
          });
        }
        const start = (srvPage.value - 1) * srvSize.value;
        srvRows.value = data.slice(start, start + srvSize.value);
        srvTotal.value = ALL.length;
        srvLoading.value = false;
      }, 400);
    }
    watch([srvPage, srvSize, srvSort], fetchPage, { immediate: true });
    const seleccion = ref([]);
    const __returned__ = { GENEROS, ARTISTAS, makeRows, columns, clientRows, ALL, srvRows, srvTotal, srvLoading, srvPage, srvSize, srvSort, fetchPage, seleccion, ref, watch, MDataTable, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { class: "hint" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Modules/m-data-table",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Modo cliente (137 filas)" }, {
        default: withCtx(() => [
          _cache[4] || (_cache[4] = createBaseVNode(
            "p",
            { class: "hint" },
            "Ordenación y paginación internas: el orden se aplica al dataset completo.",
            -1
            /* CACHED */
          )),
          createVNode($setup["MDataTable"], {
            columns: $setup.columns,
            rows: $setup.clientRows
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Modo servidor (fetch simulado)" }, {
        default: withCtx(() => [
          _cache[5] || (_cache[5] = createBaseVNode(
            "p",
            { class: "hint" },
            "Cada cambio de página, tamaño u orden dispara una recarga con 400 ms de latencia.",
            -1
            /* CACHED */
          )),
          createVNode($setup["MDataTable"], {
            columns: $setup.columns,
            rows: $setup.srvRows,
            mode: "server",
            total: $setup.srvTotal,
            loading: $setup.srvLoading,
            page: $setup.srvPage,
            "onUpdate:page": _cache[0] || (_cache[0] = ($event) => $setup.srvPage = $event),
            "page-size": $setup.srvSize,
            "onUpdate:pageSize": _cache[1] || (_cache[1] = ($event) => $setup.srvSize = $event),
            "page-size-options": [10, 20, 40],
            onSort: _cache[2] || (_cache[2] = ($event) => $setup.srvSort = $event)
          }, null, 8, ["rows", "total", "loading", "page", "page-size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "pageSizeOptions personalizadas" }, {
        default: withCtx(() => [
          createVNode($setup["MDataTable"], {
            columns: $setup.columns,
            rows: $setup.clientRows,
            "page-size": 5,
            "page-size-options": [5, 15, 30]
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Con selección integrada" }, {
        default: withCtx(() => [
          createVNode($setup["MDataTable"], {
            columns: $setup.columns,
            rows: $setup.clientRows,
            selectable: "",
            "selection-column": "",
            "selected-keys": $setup.seleccion,
            "onUpdate:selectedKeys": _cache[3] || (_cache[3] = ($event) => $setup.seleccion = $event)
          }, null, 8, ["rows", "selected-keys"]),
          createBaseVNode(
            "p",
            _hoisted_1,
            "Seleccionadas: " + toDisplayString($setup.seleccion.length),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Empty" }, {
        default: withCtx(() => [
          createVNode($setup["MDataTable"], {
            columns: $setup.columns,
            rows: []
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["docs"]);
}
_sfc_main.__file = "src/modules/data/data-table/m-data-table.story.vue";
const mDataTable_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-02b8596a"], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/modules/data/data-table/m-data-table.story.vue"]]);
export {
  mDataTable_story as default
};
