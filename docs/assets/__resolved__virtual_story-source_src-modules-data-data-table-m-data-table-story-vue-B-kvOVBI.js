const __resolved__virtual_storySource_srcModulesDataDataTableMDataTableStoryVue = `<script setup>
import { ref, watch } from 'vue'
import MDataTable from './m-data-table.vue'
import docs from './m-data-table.md?raw'

const GENEROS = ['House', 'Techno', 'Disco', 'Funk', 'Ambient', 'Jazz']
const ARTISTAS = ['Moodymann', 'Theo Parrish', 'Floating Points', 'Kerri Chandler', 'Four Tet', 'Larry Heard']

function makeRows(n) {
  return Array.from({ length: n }, (_, i) => ({
    id: i + 1,
    titulo: \`Track \${String(i + 1).padStart(3, '0')}\`,
    artista: ARTISTAS[i % ARTISTAS.length],
    genero: GENEROS[i % GENEROS.length],
    año: 1990 + ((i * 7) % 35),
  }))
}

const columns = [
  { key: 'titulo', label: 'Título', width: 200, sortable: true },
  { key: 'artista', label: 'Artista', width: 160, sortable: true },
  { key: 'genero', label: 'Género', width: 120 },
  { key: 'año', label: 'Año', width: 80, align: 'right', sortable: true },
]

const clientRows = makeRows(137)

// ── Modo servidor simulado: fetch con latencia ─────────────────────────────
const ALL = makeRows(83)
const srvRows = ref([])
const srvTotal = ref(0)
const srvLoading = ref(false)
const srvPage = ref(1)
const srvSize = ref(10)
const srvSort = ref(null)

function fetchPage() {
  srvLoading.value = true
  setTimeout(() => {
    let data = [...ALL]
    if (srvSort.value?.key) {
      const { key, dir } = srvSort.value
      data.sort((a, b) => {
        const cmp = String(a[key]).localeCompare(String(b[key]), undefined, { numeric: true })
        return dir === 'desc' ? -cmp : cmp
      })
    }
    const start = (srvPage.value - 1) * srvSize.value
    srvRows.value = data.slice(start, start + srvSize.value)
    srvTotal.value = ALL.length
    srvLoading.value = false
  }, 400)
}

watch([srvPage, srvSize, srvSort], fetchPage, { immediate: true })

const seleccion = ref([])
<\/script>

<template>
  <Story title="Modules/m-data-table" :docs="docs">

    <Variant title="Modo cliente (137 filas)">
      <p class="hint">Ordenación y paginación internas: el orden se aplica al dataset completo.</p>
      <MDataTable :columns="columns" :rows="clientRows" />
    </Variant>

    <Variant title="Modo servidor (fetch simulado)">
      <p class="hint">Cada cambio de página, tamaño u orden dispara una recarga con 400&nbsp;ms de latencia.</p>
      <MDataTable
        :columns="columns"
        :rows="srvRows"
        mode="server"
        :total="srvTotal"
        :loading="srvLoading"
        v-model:page="srvPage"
        v-model:page-size="srvSize"
        :page-size-options="[10, 20, 40]"
        @sort="srvSort = $event"
      />
    </Variant>

    <Variant title="pageSizeOptions personalizadas">
      <MDataTable :columns="columns" :rows="clientRows" :page-size="5" :page-size-options="[5, 15, 30]" />
    </Variant>

    <Variant title="Con selección integrada">
      <MDataTable
        :columns="columns"
        :rows="clientRows"
        selectable
        selection-column
        v-model:selected-keys="seleccion"
      />
      <p class="hint">Seleccionadas: {{ seleccion.length }}</p>
    </Variant>

    <Variant title="Empty">
      <MDataTable :columns="columns" :rows="[]" />
    </Variant>

  </Story>
</template>

<style scoped>
.hint {
  margin: 0 0 8px;
  font-size: 12px;
  color: #888;
}
</style>
`;
export {
  __resolved__virtual_storySource_srcModulesDataDataTableMDataTableStoryVue as default
};
