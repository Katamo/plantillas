<script setup>
import { ref, computed } from 'vue'
import CDataTable from './c-data-table.vue'
import { sortRows } from './sort-utils'
import docs from './c-data-table.md?raw'

const GENEROS = ['House', 'Techno', 'Disco', 'Funk', 'Ambient', 'Jazz']
const ARTISTAS = ['Moodymann', 'Theo Parrish', 'Floating Points', 'Kerri Chandler', 'Four Tet', 'Larry Heard']

function makeRows(n) {
  return Array.from({ length: n }, (_, i) => ({
    id: i + 1,
    titulo: `Track ${String(i + 1).padStart(2, '0')}`,
    artista: ARTISTAS[i % ARTISTAS.length],
    genero: GENEROS[i % GENEROS.length],
    año: 1990 + ((i * 7) % 35),
    duracion: 180 + ((i * 37) % 300),
  }))
}

const columns = [
  { key: 'titulo', label: 'Título', width: 200, sortable: true },
  { key: 'artista', label: 'Artista', width: 160, sortable: true },
  { key: 'genero', label: 'Género', width: 120 },
  { key: 'año', label: 'Año', width: 80, align: 'right', sortable: true },
  { key: 'duracion', label: 'Duración', width: 100, align: 'right', sortable: true },
]

const rows = makeRows(12)
const manyRows = makeRows(200)

// Selección
const seleccion = ref([])
const seleccionChecks = ref([])

// Filas no seleccionables (row-selectable) + clase por fila (row-class)
const seleccionParcial = ref([])
const rowsBloqueadas = rows.map((r) => ({ ...r, bloqueada: r.id % 3 === 0 }))

// Ordenación externa: el padre ordena
const extSort = ref({ key: null, dir: 'asc' })
const extRows = computed(() => {
  const col = columns.find((c) => c.key === extSort.value.key)
  return col ? sortRows(rows, col, extSort.value.dir) : rows
})

// Drag de filas: el padre aplica el reorden
const dragRows = ref(makeRows(8))
function applyReorder({ keys, targetKey, position }) {
  const moving = dragRows.value.filter((r) => keys.includes(r.id))
  const rest = dragRows.value.filter((r) => !keys.includes(r.id))
  let idx = rest.findIndex((r) => r.id === targetKey)
  if (idx === -1) return
  if (position === 'after') idx++
  rest.splice(idx, 0, ...moving)
  dragRows.value = rest
}

// Menú contextual
const ultimaAccion = ref('—')
</script>

<template>
  <Story title="Components/c-data-table" :docs="docs">

    <Variant title="Default">
      <CDataTable :columns="columns" :rows="rows" />
    </Variant>

    <Variant title="Ordenación interna (sortable)">
      <p class="hint">Pulsa las cabeceras Título, Artista, Año o Duración.</p>
      <CDataTable :columns="columns" :rows="rows" />
    </Variant>

    <Variant title="Ordenación controlada (sort-mode external)">
      <p class="hint">El padre ordena el array completo y lo vuelve a pasar.</p>
      <CDataTable
        :columns="columns"
        :rows="extRows"
        sort-mode="external"
        :sort-key="extSort.key"
        :sort-dir="extSort.dir"
        @sort="extSort = $event"
      />
    </Variant>

    <Variant title="Selección múltiple Ctrl/Shift (selectable)">
      <p class="hint">Clic = única · Ctrl+clic = alternar · Shift+clic = rango.</p>
      <CDataTable :columns="columns" :rows="rows" selectable v-model:selected-keys="seleccion" />
      <p class="hint">Seleccionadas: {{ seleccion.join(', ') || '—' }}</p>
    </Variant>

    <Variant title="Columna de checkboxes + seleccionar todo (selection-column)">
      <CDataTable
        :columns="columns"
        :rows="rows"
        selectable
        selection-column
        v-model:selected-keys="seleccionChecks"
      />
      <p class="hint">Seleccionadas: {{ seleccionChecks.length }}</p>
    </Variant>

    <Variant title="Filas no seleccionables + clase por fila (row-selectable / row-class)">
      <p class="hint">
        Las filas bloqueadas (una de cada tres) tienen el checkbox deshabilitado, quedan fuera
        del "seleccionar todo" y se atenúan vía <code>row-class</code>.
      </p>
      <CDataTable
        :columns="columns"
        :rows="rowsBloqueadas"
        selectable
        selection-column
        :row-selectable="(row) => !row.bloqueada"
        :row-class="(row) => ({ 'is-blocked': row.bloqueada })"
        v-model:selected-keys="seleccionParcial"
      />
      <p class="hint">Seleccionadas: {{ seleccionParcial.length }}</p>
    </Variant>

    <Variant title="Resize + reordenar columnas (drag&drop)">
      <p class="hint">
        Arrastra el borde derecho de una cabecera para redimensionar.
        Arrastra la cabecera entera para reordenar las columnas.
      </p>
      <CDataTable :columns="columns" :rows="rows" />
    </Variant>

    <Variant title="Popover de columnas (botón derecho en cabecera)">
      <p class="hint">Clic derecho sobre la cabecera para ocultar/mostrar columnas.</p>
      <CDataTable :columns="columns" :rows="rows" />
    </Variant>

    <Variant title="Drag&drop de filas (rows-draggable)">
      <p class="hint">
        Selecciona una o varias filas (Ctrl/Shift) y arrástralas para reordenar.
      </p>
      <CDataTable
        :columns="columns"
        :rows="dragRows"
        selectable
        rows-draggable
        @rows-reorder="applyReorder"
      />
    </Variant>

    <Variant title="Slots de celda y cabecera">
      <CDataTable :columns="columns" :rows="rows">
        <template #cell-titulo="{ row }">
          <strong>{{ row.titulo }}</strong>
        </template>
        <template #cell-duracion="{ value }">
          {{ Math.floor(value / 60) }}:{{ String(value % 60).padStart(2, '0') }}
        </template>
        <template #header-genero="{ column }">
          🎵 {{ column.label }}
        </template>
      </CDataTable>
    </Variant>

    <Variant title="Menú contextual de fila (slot row-menu)">
      <p class="hint">Botón derecho sobre una fila. Última acción: {{ ultimaAccion }}</p>
      <CDataTable :columns="columns" :rows="rows">
        <template #row-menu="{ row, close }">
          <button class="menu-item" @click="ultimaAccion = `Editar ${row.titulo}`; close()">
            Editar
          </button>
          <button class="menu-item" @click="ultimaAccion = `Eliminar ${row.titulo}`; close()">
            Eliminar
          </button>
        </template>
      </CDataTable>
    </Variant>

    <Variant title="Loading">
      <CDataTable :columns="columns" :rows="rows" loading />
    </Variant>

    <Variant title="Empty (texto personalizado)">
      <CDataTable :columns="columns" :rows="[]" text-empty="No se encontraron pistas" />
    </Variant>

    <Variant title="Sticky header + scroll-to-top (200 filas)">
      <CDataTable
        :columns="columns"
        :rows="manyRows"
        show-scroll-to-top
        style="--c-data-table-max-height: 320px;"
      />
    </Variant>

    <Variant title="[density=compact]">
      <CDataTable :columns="columns" :rows="rows" density="compact" />
    </Variant>

    <Variant title="[striped]">
      <CDataTable :columns="columns" :rows="rows" striped selectable />
    </Variant>

    <Variant title="[bordered]">
      <CDataTable :columns="columns" :rows="rows" bordered />
    </Variant>

    <Variant title="Persistencia (storage-key)">
      <p class="hint">
        Redimensiona, oculta o reordena columnas y recarga la página:
        el estado se conserva en localStorage.
      </p>
      <CDataTable :columns="columns" :rows="rows" storage-key="story-demo" />
    </Variant>

  </Story>
</template>

<style scoped>
.hint {
  margin: 0 0 8px;
  font-size: 12px;
  color: #888;
}

:deep(.is-blocked) {
  opacity: 0.5;
}

.menu-item {
  display: block;
  width: 100%;
  padding: 6px 12px;
  background: none;
  border: none;
  text-align: start;
  cursor: pointer;
}

.menu-item:hover {
  background: #f0f0f0;
}
</style>
