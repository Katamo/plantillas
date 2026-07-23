# c-data-table

Tabla de datos avanzada: ocultación y reordenación de columnas, redimensionado, ordenación por columna, selección múltiple con teclado, drag&drop de filas, menú contextual y persistencia opcional del estado. Cada funcionalidad se activa por props de comportamiento, de modo que un mismo componente sirve para escenarios muy distintos.

## Dependencias

- Bedrock: `BCheckbox` (popover de columnas y columna de selección).
- Composables de plantillas: [`useOptionalModel`](../../../composables/use-optional-model/useOptionalModel.md), [`useMultiSelection`](../../../composables/use-multi-selection/useMultiSelection.md).
- Typesets requeridos en el `bedrock-config` del consumidor: `body`, `label`, `caption`.
- Tokens de color requeridos en el `bedrock-config` del consumidor: `surface` (+`alt`), `text` (+`muted`), `line`, `grey` (+`light`), `primary` (+`light`). Si falta alguno, la función `color()` de Bedrock corta la compilación con `@error`.

## Definición de columnas (`ColDef`)

```js
const columns = [
  { key: 'titulo', label: 'Título', width: 220, sortable: true },
  { key: 'año', label: 'Año', width: 80, align: 'right', sortable: true },
  { key: 'genero', label: 'Género', hideable: false },
]
```

| Campo | Tipo | Default | Descripción |
|---|---|---|---|
| `key` | `String` | — | Identificador único. Da nombre a los slots `cell-<key>` / `header-<key>` |
| `label` | `String` | — | Texto de cabecera |
| `width` | `Number` | `120` | Ancho inicial en px (`table-layout: fixed`) |
| `minWidth` | `Number` | `60` | Ancho mínimo al redimensionar |
| `align` | `String` | `'left'` | `'left'` · `'center'` · `'right'` |
| `sortable` | `Boolean` | `false` | La cabecera ordena asc/desc al pulsarla |
| `resizable` | `Boolean` | `true` | Muestra el handle de redimensionado |
| `hideable` | `Boolean` | `true` | Aparece en el popover de columnas (botón derecho en la cabecera) |
| `reorderable` | `Boolean` | `true` | Se puede arrastrar para reordenar |
| `sorter` | `Function` | — | `(rowA, rowB, dir) => number`, comparador ascendente sobre filas completas |

## Props

### Datos y comportamiento

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `columns` | `Array<ColDef>` | — | Requerida |
| `rows` | `Array<Object>` | — | Requerida. El componente nunca la muta |
| `rowKey` | `String` | `'id'` | Campo que identifica cada fila |
| `rowClass` | `Function\|String\|Array\|Object` | `null` | Clases extra del `<tr>`: `(row, index) => …` o un valor estático |
| `rowSelectable` | `Function` | `null` | Predicado `(row) => boolean`: las filas que devuelvan `false` tienen el checkbox deshabilitado y quedan fuera del "seleccionar todo", del tri-estado y de los rangos con Shift |
| `selectable` | `Boolean` | `false` | Selección con clic + Ctrl (alternar) + Shift (rango) |
| `selectionColumn` | `Boolean` | `false` | Columna de checkboxes con "seleccionar todo" tri-estado |
| `rowsDraggable` | `Boolean` | `false` | Drag&drop de la(s) fila(s) seleccionada(s). Se desactiva mientras hay ordenación activa |
| `sortMode` | `String` | `'internal'` | `'internal'` ordena él mismo; `'external'` solo pinta el indicador y emite `sort` |
| `stickyHeader` | `Boolean` | `true` | Cabecera fija dentro del contenedor con scroll |
| `loading` | `Boolean` | `false` | Estado de carga (`aria-busy`, cuerpo atenuado) |
| `showScrollToTop` | `Boolean` | `false` | Botón flotante para volver arriba (requiere `--c-data-table-max-height`) |
| `storageKey` | `String` | `null` | Activa la persistencia en localStorage de anchos, columnas ocultas y orden |

### Estado opcionalmente controlado

Cada una funciona como `v-model:<prop>`. Si no se pasa, el componente gestiona el estado internamente.

| Prop | Tipo | Descripción |
|---|---|---|
| `sortKey` / `sortDir` | `String` | Columna y dirección (`'asc'`/`'desc'`) de ordenación |
| `selectedKeys` | `Array` | Claves de las filas seleccionadas |
| `hiddenColumns` | `Array<String>` | Keys de columnas ocultas |
| `columnWidths` | `Object` | Anchos por key en px |
| `columnOrder` | `Array<String>` | Orden de las columnas |

Precedencia con `storageKey`: si el padre pasa la prop, la prop gana en la inicialización; el almacenamiento se escribe siempre que haya `storageKey`.

### Variantes visuales

| Prop | Valores | Efecto |
|---|---|---|
| `density` | `'compact'` | Paddings reducidos (`data-density`) |
| `striped` | `Boolean` | Filas alternas (`data-striped`) |
| `bordered` | `Boolean` | Bordes verticales de celda (`data-bordered`) |

### Textos (i18n)

Todos con default en español: `textLoading`, `textEmpty`, `textColumnsMenu`, `labelSelectAll`, `labelSelectRow`, `labelSortBy`, `labelScrollTop`.

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `sort` | `{ key, dir }` | Al pulsar una cabecera ordenable (en ambos modos) |
| `row-click` | `{ row, key, index, event }` | Clic en una fila |
| `row-dblclick` | `{ row, key, index, event }` | Doble clic en una fila |
| `row-contextmenu` | `{ row, key, index, column, x, y, event }` | Botón derecho sobre una fila/celda. `column` es la columna bajo el cursor o `null` |
| `rows-reorder` | `{ keys, targetKey, position }` | Al soltar filas arrastradas. El consumidor aplica el reorden sobre sus datos |
| `update:<estado>` | — | Para cada estado controlable (ver arriba) |

## Slots

| Slot | Scope | Descripción |
|---|---|---|
| `cell-<key>` | `{ row, value, column, index }` | Contenido personalizado de la celda |
| `header-<key>` | `{ column }` | Contenido personalizado de la cabecera |
| `empty` / `loading` | — | Sustituyen los textos de estado |
| `row-menu` | `{ row, column, rowKey, index, close }` | Si existe, el componente abre este contenido como menú contextual al botón derecho |
| `append-col` / `append-th` / `append-td` | `append-td: { row, index }` | Columna extra fija (p. ej. acciones) |

## Uso

```html
<CDataTable
  :columns="columns"
  :rows="filas"
  row-key="id"
  selectable
  selection-column
  storage-key="mi-listado"
  v-model:selected-keys="seleccion"
  @sort="onSort"
  @rows-reorder="onReorder"
>
  <template #cell-titulo="{ row }">
    <strong>{{ row.titulo }}</strong>
  </template>

  <template #row-menu="{ row, close }">
    <button @click="editar(row); close()">Editar</button>
  </template>
</CDataTable>
```

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--c-data-table-cell-padding-y` / `-x` | `spacing(2)` / `spacing(3)` | Padding de celda |
| `--c-data-table-header-padding-y` | `spacing(2)` | Padding vertical de cabecera |
| `--c-data-table-header-bg` / `-color` | `color(surface)` / `color(text, muted)` | Cabecera |
| `--c-data-table-color` | `color(text)` | Color de texto |
| `--c-data-table-border-width` / `-color` | `1px` / `color(line)` | Bordes |
| `--c-data-table-row-hover-bg` | `color(grey, light)` | Fondo de fila en hover |
| `--c-data-table-row-selected-bg` | `color(primary, light)` | Fondo de fila seleccionada |
| `--c-data-table-stripe-bg` | `color(surface, alt)` | Fondo de filas alternas (`striped`) |
| `--c-data-table-accent` | `color(primary)` | Indicadores de orden y de drop |
| `--c-data-table-sort-indicator-size` | `5px` | Tamaño del triángulo de orden |
| `--c-data-table-resize-handle-width` | `6px` | Zona activa de redimensionado |
| `--c-data-table-drop-indicator-width` | `2px` | Línea de inserción en drag&drop |
| `--c-data-table-selection-col-width` | `spacing(10)` | Ancho de la columna de checkboxes |
| `--c-data-table-max-height` | `none` | Altura máxima del contenedor con scroll propio |
| `--c-data-table-state-padding` | `spacing(8)` | Padding de los estados vacío/cargando |
| `--c-data-table-compact-padding-y` | `spacing(1)` | Padding vertical en `density="compact"` |
| `--c-data-table-popover-*` | — | `bg`, `min-width`, `padding`, `radius`, `shadow`, `z` del popover |
| `--c-data-table-scroll-top-size` / `-offset` | `spacing(10)` / `spacing(4)` | Botón de volver arriba |

## Persistencia

Con `storage-key="mi-tabla"` se guardan en `localStorage` (clave `c-data-table:mi-tabla`) los anchos, columnas ocultas y orden de columnas, con debounce y versión de esquema (`{ v: 1, widths, hidden, order }`). Las keys que ya no existan en `columns` se descartan al restaurar.

## Accesibilidad

- Tabla nativa con `scope="col"`; las cabeceras ordenables son `<button>` (Enter/Espacio funcionan) y exponen `aria-sort`.
- `aria-busy` durante la carga; checkboxes de selección con `aria-label` configurables.
- El popover es `role="dialog"` con foco inicial en el primer checkbox; `Escape` lo cierra.
- Limitación v1: los drag&drop (columnas y filas) no tienen alternativa de teclado; el orden de columnas sí es controlable programáticamente vía `v-model:column-order`.

## RTL

Los indicadores y el handle de resize usan propiedades lógicas y el cálculo de lado de inserción se invierte automáticamente en contextos `direction: rtl`.
