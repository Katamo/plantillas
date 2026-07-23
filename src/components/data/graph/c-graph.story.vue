<script setup>
import { ref, computed } from 'vue'
import CGraph from './c-graph.vue'
import docs from './c-graph.md?raw'

// Datos de ejemplo deliberadamente ajenos al dominio de cualquier proyecto
// consumidor: un pequeño árbol de influencias entre lenguajes de programación.
const nodes = [
  { id: 'c', label: 'C', group: 'compilado', state: 'solid' },
  { id: 'cpp', label: 'C++', group: 'compilado', state: 'solid' },
  { id: 'rust', label: 'Rust', group: 'compilado', state: 'active' },
  { id: 'go', label: 'Go', group: 'compilado', state: 'solid', filled: false },
  { id: 'python', label: 'Python', group: 'interpretado', state: 'solid' },
  { id: 'ruby', label: 'Ruby', group: 'interpretado', state: 'solid' },
  { id: 'js', label: 'JavaScript', group: 'interpretado', state: 'solid' },
  { id: 'ts', label: 'TypeScript', group: 'hibrido', state: 'solid' },
  { id: 'java', label: 'Java', group: 'hibrido', state: 'solid' },
  { id: 'zig', label: 'Zig', group: 'compilado', state: 'ghost' },
]

const edges = [
  { source: 'c', target: 'cpp', label: 'extiende' },
  { source: 'c', target: 'go', label: 'influye' },
  { source: 'cpp', target: 'rust', label: 'influye' },
  { source: 'c', target: 'zig', label: 'influye' },
  { source: 'python', target: 'ruby', label: 'coetáneo' },
  { source: 'js', target: 'ts', label: 'superset' },
  { source: 'java', target: 'ts', label: 'influye' },
  { source: 'python', target: 'go', label: 'influye' },
]

const groupColors = {
  compilado: '#c1502c',
  interpretado: '#2c7168',
  hibrido: '#a9822f',
}

const selectedId = ref(null)
const lastClicked = ref('—')

const hiddenIds = computed(() =>
  nodes.filter((n) => n.group === 'interpretado').map((n) => n.id)
)
</script>

<template>
  <Story title="Components/c-graph" :docs="docs">

    <Variant title="Default">
      <div style="height: 420px; border: 1px solid #ddd;">
        <CGraph :nodes="nodes" :edges="edges" :group-colors="groupColors" />
      </div>
    </Variant>

    <Variant title="Selección controlada">
      <p>Seleccionado: <strong>{{ selectedId || '—' }}</strong> · último clic: {{ lastClicked }}</p>
      <div style="height: 420px; border: 1px solid #ddd;">
        <CGraph
          :nodes="nodes"
          :edges="edges"
          :group-colors="groupColors"
          v-model:selected-id="selectedId"
          @node-click="(n) => (lastClicked = n ? n.label : '(vacío)')"
        />
      </div>
    </Variant>

    <Variant title="Con nodos ocultos (filtrado)">
      <p>El grupo "interpretado" está oculto — el resto conserva su posición.</p>
      <div style="height: 420px; border: 1px solid #ddd;">
        <CGraph :nodes="nodes" :edges="edges" :group-colors="groupColors" :hidden-ids="hiddenIds" />
      </div>
    </Variant>

  </Story>
</template>
