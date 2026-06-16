<script setup>
import { reactive } from 'vue'
import CCardMedia from './c-card-media.vue'
import docs from './c-card-media.md?raw'

const state = reactive({
  ratio: '1',
  padding: '12px',
})
</script>

<template>
  <Story title="Components/c-card-media" :docs="docs">
    <Variant title="Default — vertical, cover placeholder">
      <div style="width: 240px">
        <CCardMedia :style="{ '--c-card-media-cover-ratio': state.ratio, '--c-card-media-padding': state.padding }">
          Título del contenido
          <template #subtitle>SUBTÍTULO</template>
          <template #meta-start>REF-001</template>
          <template #meta-end>15.03.2024</template>
        </CCardMedia>
      </div>
      <template #controls>
        <HstText v-model="state.ratio" title="--c-card-media-cover-ratio" />
        <HstText v-model="state.padding" title="--c-card-media-padding" />
      </template>
    </Variant>

    <Variant title="Como enlace + tag superpuesto">
      <div style="width: 240px">
        <CCardMedia href="#">
          Título enlazado
          <template #subtitle>SUBTÍTULO</template>
          <template #meta-start>REF-002</template>
          <template #tag>
            <span style="padding: 3px 7px; background: #2563eb; color: #fff; font-size: 9px">TAG</span>
          </template>
        </CCardMedia>
      </div>
    </Variant>

    <Variant title="Con footer (chips)">
      <div style="width: 240px">
        <CCardMedia>
          Con chips en el footer
          <template #subtitle>SUBTÍTULO</template>
          <template #footer>
            <span style="padding: 2px 8px; border: 1px solid #ccc; font-size: 9px">CHIP UNO</span>
            <span style="padding: 2px 8px; border: 1px solid #ccc; font-size: 9px">CHIP DOS</span>
          </template>
        </CCardMedia>
      </div>
    </Variant>

    <Variant title="[layout] horizontal — fila compacta">
      <div style="width: 360px; display: flex; flex-direction: column; gap: 8px">
        <CCardMedia layout="horizontal" size="s">
          Fila compacta uno
          <template #subtitle>SUBTÍTULO</template>
          <template #meta-end>21.06.2026</template>
        </CCardMedia>
        <CCardMedia layout="horizontal" size="s">
          Fila compacta dos
          <template #subtitle>SUBTÍTULO</template>
          <template #meta-end>03.07.2026</template>
        </CCardMedia>
      </div>
    </Variant>

    <Variant title="[size] s / default / l">
      <div style="display: flex; gap: 16px; align-items: flex-start">
        <div style="width: 180px"><CCardMedia size="s">Tamaño S<template #subtitle>SUB</template></CCardMedia></div>
        <div style="width: 220px"><CCardMedia>Tamaño M<template #subtitle>SUB</template></CCardMedia></div>
        <div style="width: 280px"><CCardMedia size="l">Tamaño L<template #subtitle>SUB</template></CCardMedia></div>
      </div>
    </Variant>

    <Variant title="Grid de cards">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; width: 560px">
        <CCardMedia v-for="i in 6" :key="i">
          Elemento {{ i }}
          <template #subtitle>SUBTÍTULO</template>
          <template #meta-start>REF-00{{ i }}</template>
        </CCardMedia>
      </div>
    </Variant>
  </Story>
</template>
