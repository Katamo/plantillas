const __resolved__virtual_storySource_srcComposablesUseOptionalModelUseoptionalmodelStoryVue = `<script setup>
import { defineComponent, ref } from 'vue'
import { useOptionalModel } from './useOptionalModel'
import docs from './useOptionalModel.md?raw'

// Componente de demo con un contador opcionalmente controlado
const Counter = defineComponent({
  props: {
    count: { type: Number, default: undefined },
  },
  emits: ['update:count'],
  setup(props, { emit }) {
    const count = useOptionalModel(props, 'count', emit, 0)
    return { count }
  },
  template: \`
    <button
      style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
      @click="count = count + 1"
    >
      Contador: {{ count }}
    </button>
  \`,
})

const externo = ref(10)
<\/script>

<template>
  <Story title="Composables/useOptionalModel" :docs="docs">

    <Variant title="No controlado — estado interno">
      <Counter />
      <p style="margin-top: 8px; font-size: 12px; color: #888;">
        Sin prop: el componente gestiona su propio estado.
      </p>
    </Variant>

    <Variant title="Controlado — v-model del padre">
      <Counter v-model:count="externo" />
      <p style="margin-top: 8px; font-size: 12px; color: #888;">
        Estado del padre: {{ externo }}
        <button style="margin-left: 8px;" @click="externo = 0">Reset externo</button>
      </p>
    </Variant>

  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComposablesUseOptionalModelUseoptionalmodelStoryVue as default
};
