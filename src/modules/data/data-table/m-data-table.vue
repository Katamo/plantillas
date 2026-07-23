<template>
  <div class="m-data-table">
    <CDataTable
      v-bind="$attrs"
      class="m-data-table__table"
      :columns="columns"
      :rows="pagedRows"
      sort-mode="external"
      :sort-key="sortKey"
      :sort-dir="sortDir"
      @sort="onSort"
    >
      <template v-for="(_, name) in $slots" :key="name" #[name]="scope">
        <slot :name="name" v-bind="scope ?? {}" />
      </template>
    </CDataTable>

    <footer class="m-data-table__footer">
      <p v-if="rangeText" class="m-data-table__range">{{ rangeText }}</p>

      <BPagination
        v-if="totalPages > 1"
        class="m-data-table__pagination"
        :current-page="pageModel"
        :total-pages="totalPages"
        :siblings="siblings"
        @update:current-page="pageModel = $event"
      />

      <label class="m-data-table__size">
        <BSelect
          :model-value="pageSizeModel"
          :options="pageSizeOptions"
          @update:model-value="pageSizeModel = $event"
        />
        <span>{{ textPerPage }}</span>
      </label>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { BPagination, BSelect } from '@bedrock/core/vue'
import { CDataTable, sortRows } from '../../../components/data/data-table'
import { useOptionalModel } from '../../../composables/use-optional-model'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, required: true },

  // 'client': recibe todas las filas y ordena/pagina internamente.
  // 'server': recibe la página actual + total y solo emite los cambios.
  mode: { type: String, default: 'client' },

  // Estado opcionalmente controlado (v-model)
  page: { type: Number, default: undefined },
  pageSize: { type: Number, default: undefined },

  pageSizeOptions: { type: Array, default: () => [10, 25, 50, 100] },
  total: { type: Number, default: null }, // solo modo server
  siblings: { type: Number, default: 1 }, // páginas visibles a cada lado en BPagination

  // Textos (i18n): «1–25 de 312» · «25 · por página»
  textPerPage: { type: String, default: 'por página' },
  textOf: { type: String, default: 'de' },
})

// `sort` se declara para sacarlo de $attrs: el módulo lo intercepta (resetea
// página y ordena en modo cliente) y lo re-emite una única vez
const emit = defineEmits(['update:page', 'update:pageSize', 'sort'])

const pageModel = useOptionalModel(props, 'page', emit, 1)
const pageSizeModel = useOptionalModel(props, 'pageSize', emit, 25)

const sortKey = ref(null)
const sortDir = ref('asc')

// Modo cliente: ordenar SIEMPRE el array completo antes de trocear la página
const sortedRows = computed(() => {
  if (props.mode !== 'client') return props.rows
  const column = props.columns.find((c) => c.key === sortKey.value)
  return column ? sortRows(props.rows, column, sortDir.value) : props.rows
})

const totalItems = computed(() =>
  props.mode === 'server' ? props.total ?? props.rows.length : props.rows.length
)

const totalPages = computed(() => Math.max(1, Math.ceil(totalItems.value / pageSizeModel.value)))

const pagedRows = computed(() => {
  if (props.mode === 'server') return props.rows
  const start = (pageModel.value - 1) * pageSizeModel.value
  return sortedRows.value.slice(start, start + pageSizeModel.value)
})

const rangeText = computed(() => {
  if (!totalItems.value) return ''
  const start = (pageModel.value - 1) * pageSizeModel.value + 1
  const end = Math.min(pageModel.value * pageSizeModel.value, totalItems.value)
  return `${start}–${end} ${props.textOf} ${totalItems.value}`
})

function onSort({ key, dir }) {
  sortKey.value = key
  sortDir.value = dir
  pageModel.value = 1
  emit('sort', { key, dir })
}

// Cambiar el tamaño de página vuelve a la primera; si el total encoge,
// la página actual se recorta al nuevo máximo
watch(pageSizeModel, () => {
  pageModel.value = 1
})

watch(totalPages, (total) => {
  if (pageModel.value > total) pageModel.value = total
})
</script>

<style lang="scss" src="./m-data-table.scss" />
