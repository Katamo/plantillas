<script setup>
import { ref, computed } from 'vue'
import { useMultiSelection } from './useMultiSelection'
import docs from './useMultiSelection.md?raw'

const items = ref(Array.from({ length: 10 }, (_, i) => ({ id: i + 1, nombre: `Elemento ${i + 1}` })))
const orderedKeys = computed(() => items.value.map((i) => i.id))
const selectedKeys = ref([])

const { isSelected, handleClick, allSelected, someSelected, selectAll, clear } =
  useMultiSelection(orderedKeys, selectedKeys)
</script>

<template>
  <Story title="Composables/useMultiSelection" :docs="docs">

    <Variant title="Lista con Ctrl/Shift">
      <p style="font-size: 12px; color: #888; margin-bottom: 8px;">
        Clic = única · Ctrl+clic = alternar · Shift+clic = rango
      </p>
      <ul style="list-style: none; padding: 0; margin: 0; max-width: 240px; user-select: none;">
        <li
          v-for="item in items"
          :key="item.id"
          :style="{
            padding: '6px 12px',
            cursor: 'pointer',
            borderRadius: '4px',
            background: isSelected(item.id) ? '#dbeafe' : 'transparent',
          }"
          @click="handleClick(item.id, $event)"
        >
          {{ item.nombre }}
        </li>
      </ul>
      <p style="font-size: 12px; color: #888; margin-top: 8px;">
        Seleccionados: {{ selectedKeys.join(', ') || '—' }}<br>
        Todos: {{ allSelected }} · Parcial: {{ someSelected }}
      </p>
      <button @click="selectAll()">Seleccionar todo</button>
      <button style="margin-left: 8px;" @click="clear()">Limpiar</button>
    </Variant>

  </Story>
</template>
