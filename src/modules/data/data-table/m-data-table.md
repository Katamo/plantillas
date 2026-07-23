# m-data-table

Módulo que compone [`c-data-table`](../../../components/data/data-table/c-data-table.md) con paginación (`BPagination`) y un selector de tamaño de página (`BSelect`). Soporta dos modos: **cliente** (recibe todas las filas y ordena/pagina internamente) y **servidor** (recibe la página actual + total y emite los cambios para que el consumidor recargue).

## Dependencias

- Plantillas: `c-data-table`, `useOptionalModel`.
- Bedrock: `BPagination`, `BSelect`.

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `columns` | `Array<ColDef>` | — | Requerida. Misma forma que en c-data-table |
| `rows` | `Array<Object>` | — | Requerida. En modo cliente, TODAS las filas; en servidor, solo la página actual |
| `mode` | `String` | `'client'` | `'client'` · `'server'` |
| `page` | `Number` | `1` | `v-model:page` |
| `pageSize` | `Number` | `25` | `v-model:page-size` |
| `pageSizeOptions` | `Array<Number>` | `[10, 25, 50, 100]` | Opciones del selector |
| `total` | `Number` | `null` | Total de elementos (solo modo servidor) |
| `siblings` | `Number` | `1` | Páginas visibles a cada lado de la actual en BPagination |
| `textPerPage` | `String` | `'por página'` | Etiqueta del selector |
| `textOf` | `String` | `'de'` | Conector del rango («1–25 de 312») |

Cualquier otra prop de `c-data-table` (`selectable`, `selection-column`, `storage-key`, `striped`, textos…) **pasa a través** del módulo directamente al componente, igual que sus eventos (`row-dblclick`, `rows-reorder`…) y el `v-model:selected-keys`.

## Eventos

| Evento | Payload | Descripción |
|---|---|---|
| `update:page` / `update:pageSize` | `Number` | Cambio de página / tamaño (el tamaño resetea la página a 1) |
| `sort` | `{ key, dir }` | Cambio de ordenación (resetea la página a 1). En modo servidor el consumidor debe recargar |

## Slots

Todos los slots se reenvían a `c-data-table` (`cell-<key>`, `header-<key>`, `row-menu`, `empty`, `loading`…).

## Uso

### Modo cliente

```html
<MDataTable :columns="columns" :rows="todasLasFilas" :page-size-options="[10, 20, 50]" />
```

### Modo servidor

```html
<MDataTable
  :columns="columns"
  :rows="paginaActual"
  mode="server"
  :total="totalServidor"
  :loading="cargando"
  v-model:page="page"
  v-model:page-size="pageSize"
  @sort="recargar"
/>
```

El consumidor observa `page`, `pageSize` y `sort` y pide al servidor la página correspondiente (patrón `useAdminList`).

## CSS Custom Properties

| Propiedad | Default | Descripción |
|---|---|---|
| `--m-data-table-footer-gap` | `spacing(4)` | Separación entre rango, paginación y selector |
| `--m-data-table-footer-padding-y` | `spacing(3)` | Padding vertical del pie |

Las custom properties de `c-data-table`, `BPagination` y `BSelect` aplican igualmente dentro del módulo.
