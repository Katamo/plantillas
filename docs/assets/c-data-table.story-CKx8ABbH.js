import { ar as resolveComponent, ac as openBlock, n as createBlock, aX as withCtx, z as createVNode, l as createBaseVNode, ay as toDisplayString, x as createTextVNode, i as computed, ak as ref } from "./vendor-DbHuLTxc.js";
import { s as sortRows, C as CDataTable } from "./c-data-table-D7LJlutG.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useOptionalModel-CSCs5AM0.js";
import "./useMultiSelection-CmChJsos.js";
const docs = "# c-data-table\n\nTabla de datos avanzada: ocultación y reordenación de columnas, redimensionado, ordenación por columna, selección múltiple con teclado, drag&drop de filas, menú contextual y persistencia opcional del estado. Cada funcionalidad se activa por props de comportamiento, de modo que un mismo componente sirve para escenarios muy distintos.\n\n## Dependencias\n\n- Bedrock: `BCheckbox` (popover de columnas y columna de selección).\n- Composables de plantillas: [`useOptionalModel`](../../../composables/use-optional-model/useOptionalModel.md), [`useMultiSelection`](../../../composables/use-multi-selection/useMultiSelection.md).\n- Typesets requeridos en el `bedrock-config` del consumidor: `body`, `label`, `caption`.\n\n## Definición de columnas (`ColDef`)\n\n```js\nconst columns = [\n  { key: 'titulo', label: 'Título', width: 220, sortable: true },\n  { key: 'año', label: 'Año', width: 80, align: 'right', sortable: true },\n  { key: 'genero', label: 'Género', hideable: false },\n]\n```\n\n| Campo | Tipo | Default | Descripción |\n|---|---|---|---|\n| `key` | `String` | — | Identificador único. Da nombre a los slots `cell-<key>` / `header-<key>` |\n| `label` | `String` | — | Texto de cabecera |\n| `width` | `Number` | `120` | Ancho inicial en px (`table-layout: fixed`) |\n| `minWidth` | `Number` | `60` | Ancho mínimo al redimensionar |\n| `align` | `String` | `'left'` | `'left'` · `'center'` · `'right'` |\n| `sortable` | `Boolean` | `false` | La cabecera ordena asc/desc al pulsarla |\n| `resizable` | `Boolean` | `true` | Muestra el handle de redimensionado |\n| `hideable` | `Boolean` | `true` | Aparece en el popover de columnas (botón derecho en la cabecera) |\n| `reorderable` | `Boolean` | `true` | Se puede arrastrar para reordenar |\n| `sorter` | `Function` | — | `(rowA, rowB, dir) => number`, comparador ascendente sobre filas completas |\n\n## Props\n\n### Datos y comportamiento\n\n| Prop | Tipo | Default | Descripción |\n|---|---|---|---|\n| `columns` | `Array<ColDef>` | — | Requerida |\n| `rows` | `Array<Object>` | — | Requerida. El componente nunca la muta |\n| `rowKey` | `String` | `'id'` | Campo que identifica cada fila |\n| `selectable` | `Boolean` | `false` | Selección con clic + Ctrl (alternar) + Shift (rango) |\n| `selectionColumn` | `Boolean` | `false` | Columna de checkboxes con \"seleccionar todo\" tri-estado |\n| `rowsDraggable` | `Boolean` | `false` | Drag&drop de la(s) fila(s) seleccionada(s). Se desactiva mientras hay ordenación activa |\n| `sortMode` | `String` | `'internal'` | `'internal'` ordena él mismo; `'external'` solo pinta el indicador y emite `sort` |\n| `stickyHeader` | `Boolean` | `true` | Cabecera fija dentro del contenedor con scroll |\n| `loading` | `Boolean` | `false` | Estado de carga (`aria-busy`, cuerpo atenuado) |\n| `showScrollToTop` | `Boolean` | `false` | Botón flotante para volver arriba (requiere `--c-data-table-max-height`) |\n| `storageKey` | `String` | `null` | Activa la persistencia en localStorage de anchos, columnas ocultas y orden |\n\n### Estado opcionalmente controlado\n\nCada una funciona como `v-model:<prop>`. Si no se pasa, el componente gestiona el estado internamente.\n\n| Prop | Tipo | Descripción |\n|---|---|---|\n| `sortKey` / `sortDir` | `String` | Columna y dirección (`'asc'`/`'desc'`) de ordenación |\n| `selectedKeys` | `Array` | Claves de las filas seleccionadas |\n| `hiddenColumns` | `Array<String>` | Keys de columnas ocultas |\n| `columnWidths` | `Object` | Anchos por key en px |\n| `columnOrder` | `Array<String>` | Orden de las columnas |\n\nPrecedencia con `storageKey`: si el padre pasa la prop, la prop gana en la inicialización; el almacenamiento se escribe siempre que haya `storageKey`.\n\n### Variantes visuales\n\n| Prop | Valores | Efecto |\n|---|---|---|\n| `density` | `'compact'` | Paddings reducidos (`data-density`) |\n| `striped` | `Boolean` | Filas alternas (`data-striped`) |\n| `bordered` | `Boolean` | Bordes verticales de celda (`data-bordered`) |\n\n### Textos (i18n)\n\nTodos con default en español: `textLoading`, `textEmpty`, `textColumnsMenu`, `labelSelectAll`, `labelSelectRow`, `labelSortBy`, `labelScrollTop`.\n\n## Eventos\n\n| Evento | Payload | Descripción |\n|---|---|---|\n| `sort` | `{ key, dir }` | Al pulsar una cabecera ordenable (en ambos modos) |\n| `row-click` | `{ row, key, index, event }` | Clic en una fila |\n| `row-dblclick` | `{ row, key, index, event }` | Doble clic en una fila |\n| `row-contextmenu` | `{ row, key, index, column, x, y, event }` | Botón derecho sobre una fila/celda. `column` es la columna bajo el cursor o `null` |\n| `rows-reorder` | `{ keys, targetKey, position }` | Al soltar filas arrastradas. El consumidor aplica el reorden sobre sus datos |\n| `update:<estado>` | — | Para cada estado controlable (ver arriba) |\n\n## Slots\n\n| Slot | Scope | Descripción |\n|---|---|---|\n| `cell-<key>` | `{ row, value, column, index }` | Contenido personalizado de la celda |\n| `header-<key>` | `{ column }` | Contenido personalizado de la cabecera |\n| `empty` / `loading` | — | Sustituyen los textos de estado |\n| `row-menu` | `{ row, column, rowKey, index, close }` | Si existe, el componente abre este contenido como menú contextual al botón derecho |\n| `append-col` / `append-th` / `append-td` | `append-td: { row, index }` | Columna extra fija (p. ej. acciones) |\n\n## Uso\n\n```html\n<CDataTable\n  :columns=\"columns\"\n  :rows=\"filas\"\n  row-key=\"id\"\n  selectable\n  selection-column\n  storage-key=\"mi-listado\"\n  v-model:selected-keys=\"seleccion\"\n  @sort=\"onSort\"\n  @rows-reorder=\"onReorder\"\n>\n  <template #cell-titulo=\"{ row }\">\n    <strong>{{ row.titulo }}</strong>\n  </template>\n\n  <template #row-menu=\"{ row, close }\">\n    <button @click=\"editar(row); close()\">Editar</button>\n  </template>\n</CDataTable>\n```\n\n## CSS Custom Properties\n\n| Propiedad | Default | Descripción |\n|---|---|---|\n| `--c-data-table-cell-padding-y` / `-x` | `spacing(2)` / `spacing(3)` | Padding de celda |\n| `--c-data-table-header-padding-y` | `spacing(2)` | Padding vertical de cabecera |\n| `--c-data-table-header-bg` / `-color` | `color(surface)` / `color(text, muted)` | Cabecera |\n| `--c-data-table-color` | `color(text)` | Color de texto |\n| `--c-data-table-border-width` / `-color` | `1px` / `color(line)` | Bordes |\n| `--c-data-table-row-hover-bg` | `color(grey, light)` | Fondo de fila en hover |\n| `--c-data-table-row-selected-bg` | `color(primary, light)` | Fondo de fila seleccionada |\n| `--c-data-table-stripe-bg` | `color(surface, alt)` | Fondo de filas alternas (`striped`) |\n| `--c-data-table-accent` | `color(primary)` | Indicadores de orden y de drop |\n| `--c-data-table-sort-indicator-size` | `5px` | Tamaño del triángulo de orden |\n| `--c-data-table-resize-handle-width` | `6px` | Zona activa de redimensionado |\n| `--c-data-table-drop-indicator-width` | `2px` | Línea de inserción en drag&drop |\n| `--c-data-table-selection-col-width` | `spacing(10)` | Ancho de la columna de checkboxes |\n| `--c-data-table-max-height` | `none` | Altura máxima del contenedor con scroll propio |\n| `--c-data-table-state-padding` | `spacing(8)` | Padding de los estados vacío/cargando |\n| `--c-data-table-compact-padding-y` | `spacing(1)` | Padding vertical en `density=\"compact\"` |\n| `--c-data-table-popover-*` | — | `bg`, `min-width`, `padding`, `radius`, `shadow`, `z` del popover |\n| `--c-data-table-scroll-top-size` / `-offset` | `spacing(10)` / `spacing(4)` | Botón de volver arriba |\n\n## Persistencia\n\nCon `storage-key=\"mi-tabla\"` se guardan en `localStorage` (clave `c-data-table:mi-tabla`) los anchos, columnas ocultas y orden de columnas, con debounce y versión de esquema (`{ v: 1, widths, hidden, order }`). Las keys que ya no existan en `columns` se descartan al restaurar.\n\n## Accesibilidad\n\n- Tabla nativa con `scope=\"col\"`; las cabeceras ordenables son `<button>` (Enter/Espacio funcionan) y exponen `aria-sort`.\n- `aria-busy` durante la carga; checkboxes de selección con `aria-label` configurables.\n- El popover es `role=\"dialog\"` con foco inicial en el primer checkbox; `Escape` lo cierra.\n- Limitación v1: los drag&drop (columnas y filas) no tienen alternativa de teclado; el orden de columnas sí es controlable programáticamente vía `v-model:column-order`.\n\n## RTL\n\nLos indicadores y el handle de resize usan propiedades lógicas y el cálculo de lado de inserción se invierte automáticamente en contextos `direction: rtl`.\n";
const _sfc_main = {
  __name: "c-data-table.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const GENEROS = ["House", "Techno", "Disco", "Funk", "Ambient", "Jazz"];
    const ARTISTAS = ["Moodymann", "Theo Parrish", "Floating Points", "Kerri Chandler", "Four Tet", "Larry Heard"];
    function makeRows(n) {
      return Array.from({ length: n }, (_, i) => ({
        id: i + 1,
        titulo: `Track ${String(i + 1).padStart(2, "0")}`,
        artista: ARTISTAS[i % ARTISTAS.length],
        genero: GENEROS[i % GENEROS.length],
        año: 1990 + i * 7 % 35,
        duracion: 180 + i * 37 % 300
      }));
    }
    const columns = [
      { key: "titulo", label: "Título", width: 200, sortable: true },
      { key: "artista", label: "Artista", width: 160, sortable: true },
      { key: "genero", label: "Género", width: 120 },
      { key: "año", label: "Año", width: 80, align: "right", sortable: true },
      { key: "duracion", label: "Duración", width: 100, align: "right", sortable: true }
    ];
    const rows = makeRows(12);
    const manyRows = makeRows(200);
    const seleccion = ref([]);
    const seleccionChecks = ref([]);
    const extSort = ref({ key: null, dir: "asc" });
    const extRows = computed(() => {
      const col = columns.find((c) => c.key === extSort.value.key);
      return col ? sortRows(rows, col, extSort.value.dir) : rows;
    });
    const dragRows = ref(makeRows(8));
    function applyReorder({ keys, targetKey, position }) {
      const moving = dragRows.value.filter((r) => keys.includes(r.id));
      const rest = dragRows.value.filter((r) => !keys.includes(r.id));
      let idx = rest.findIndex((r) => r.id === targetKey);
      if (idx === -1) return;
      if (position === "after") idx++;
      rest.splice(idx, 0, ...moving);
      dragRows.value = rest;
    }
    const ultimaAccion = ref("—");
    const __returned__ = { GENEROS, ARTISTAS, makeRows, columns, rows, manyRows, seleccion, seleccionChecks, extSort, extRows, dragRows, applyReorder, ultimaAccion, ref, computed, CDataTable, get sortRows() {
      return sortRows;
    }, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { class: "hint" };
const _hoisted_2 = { class: "hint" };
const _hoisted_3 = { class: "hint" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/c-data-table",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Ordenación interna (sortable)" }, {
        default: withCtx(() => [
          _cache[3] || (_cache[3] = createBaseVNode(
            "p",
            { class: "hint" },
            "Pulsa las cabeceras Título, Artista, Año o Duración.",
            -1
            /* CACHED */
          )),
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Ordenación controlada (sort-mode external)" }, {
        default: withCtx(() => [
          _cache[4] || (_cache[4] = createBaseVNode(
            "p",
            { class: "hint" },
            "El padre ordena el array completo y lo vuelve a pasar.",
            -1
            /* CACHED */
          )),
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.extRows,
            "sort-mode": "external",
            "sort-key": $setup.extSort.key,
            "sort-dir": $setup.extSort.dir,
            onSort: _cache[0] || (_cache[0] = ($event) => $setup.extSort = $event)
          }, null, 8, ["rows", "sort-key", "sort-dir"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Selección múltiple Ctrl/Shift (selectable)" }, {
        default: withCtx(() => [
          _cache[5] || (_cache[5] = createBaseVNode(
            "p",
            { class: "hint" },
            "Clic = única · Ctrl+clic = alternar · Shift+clic = rango.",
            -1
            /* CACHED */
          )),
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows,
            selectable: "",
            "selected-keys": $setup.seleccion,
            "onUpdate:selectedKeys": _cache[1] || (_cache[1] = ($event) => $setup.seleccion = $event)
          }, null, 8, ["rows", "selected-keys"]),
          createBaseVNode(
            "p",
            _hoisted_1,
            "Seleccionadas: " + toDisplayString($setup.seleccion.join(", ") || "—"),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Columna de checkboxes + seleccionar todo (selection-column)" }, {
        default: withCtx(() => [
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows,
            selectable: "",
            "selection-column": "",
            "selected-keys": $setup.seleccionChecks,
            "onUpdate:selectedKeys": _cache[2] || (_cache[2] = ($event) => $setup.seleccionChecks = $event)
          }, null, 8, ["rows", "selected-keys"]),
          createBaseVNode(
            "p",
            _hoisted_2,
            "Seleccionadas: " + toDisplayString($setup.seleccionChecks.length),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Resize + reordenar columnas (drag&drop)" }, {
        default: withCtx(() => [
          _cache[6] || (_cache[6] = createBaseVNode(
            "p",
            { class: "hint" },
            " Arrastra el borde derecho de una cabecera para redimensionar. Arrastra la cabecera entera para reordenar las columnas. ",
            -1
            /* CACHED */
          )),
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Popover de columnas (botón derecho en cabecera)" }, {
        default: withCtx(() => [
          _cache[7] || (_cache[7] = createBaseVNode(
            "p",
            { class: "hint" },
            "Clic derecho sobre la cabecera para ocultar/mostrar columnas.",
            -1
            /* CACHED */
          )),
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Drag&drop de filas (rows-draggable)" }, {
        default: withCtx(() => [
          _cache[8] || (_cache[8] = createBaseVNode(
            "p",
            { class: "hint" },
            " Selecciona una o varias filas (Ctrl/Shift) y arrástralas para reordenar. ",
            -1
            /* CACHED */
          )),
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.dragRows,
            selectable: "",
            "rows-draggable": "",
            onRowsReorder: $setup.applyReorder
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Slots de celda y cabecera" }, {
        default: withCtx(() => [
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows
          }, {
            "cell-titulo": withCtx(({ row }) => [
              createBaseVNode(
                "strong",
                null,
                toDisplayString(row.titulo),
                1
                /* TEXT */
              )
            ]),
            "cell-duracion": withCtx(({ value }) => [
              createTextVNode(
                toDisplayString(Math.floor(value / 60)) + ":" + toDisplayString(String(value % 60).padStart(2, "0")),
                1
                /* TEXT */
              )
            ]),
            "header-genero": withCtx(({ column }) => [
              createTextVNode(
                " 🎵 " + toDisplayString(column.label),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Menú contextual de fila (slot row-menu)" }, {
        default: withCtx(() => [
          createBaseVNode(
            "p",
            _hoisted_3,
            "Botón derecho sobre una fila. Última acción: " + toDisplayString($setup.ultimaAccion),
            1
            /* TEXT */
          ),
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows
          }, {
            "row-menu": withCtx(({ row, close }) => [
              createBaseVNode("button", {
                class: "menu-item",
                onClick: ($event) => {
                  $setup.ultimaAccion = `Editar ${row.titulo}`;
                  close();
                }
              }, " Editar ", 8, _hoisted_4),
              createBaseVNode("button", {
                class: "menu-item",
                onClick: ($event) => {
                  $setup.ultimaAccion = `Eliminar ${row.titulo}`;
                  close();
                }
              }, " Eliminar ", 8, _hoisted_5)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Loading" }, {
        default: withCtx(() => [
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows,
            loading: ""
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Empty (texto personalizado)" }, {
        default: withCtx(() => [
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: [],
            "text-empty": "No se encontraron pistas"
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Sticky header + scroll-to-top (200 filas)" }, {
        default: withCtx(() => [
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.manyRows,
            "show-scroll-to-top": "",
            style: { "--c-data-table-max-height": "320px" }
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "[density=compact]" }, {
        default: withCtx(() => [
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows,
            density: "compact"
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "[striped]" }, {
        default: withCtx(() => [
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows,
            striped: "",
            selectable: ""
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "[bordered]" }, {
        default: withCtx(() => [
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows,
            bordered: ""
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Persistencia (storage-key)" }, {
        default: withCtx(() => [
          _cache[9] || (_cache[9] = createBaseVNode(
            "p",
            { class: "hint" },
            " Redimensiona, oculta o reordena columnas y recarga la página: el estado se conserva en localStorage. ",
            -1
            /* CACHED */
          )),
          createVNode($setup["CDataTable"], {
            columns: $setup.columns,
            rows: $setup.rows,
            "storage-key": "story-demo"
          }, null, 8, ["rows"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["docs"]);
}
_sfc_main.__file = "src/components/data/data-table/c-data-table.story.vue";
const cDataTable_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d5243c0c"], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/data/data-table/c-data-table.story.vue"]]);
export {
  cDataTable_story as default
};
