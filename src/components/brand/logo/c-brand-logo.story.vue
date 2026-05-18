<script setup>
import { reactive } from 'vue'
import CBrandLogo from './c-brand-logo.vue'
import docs from './c-brand-logo.md?raw'

const src = '/placeholder-logo.svg'
const alt = 'Brand'

const state = reactive({
  gap: '12px',
})
</script>

<template>
  <Story title="Components/c-brand-logo" :docs="docs">

    <Variant title="Default — imagen + texto">
      <div style="height: 120px; border: 1px dashed #ccc; display: flex;">
        <CBrandLogo :src="src" :alt="alt" :style="{ '--c-brand-logo-gap': state.gap }">
          <span>Brand Name</span>
        </CBrandLogo>
      </div>
      <template #controls>
        <HstText v-model="state.gap" title="--c-brand-logo-gap" />
      </template>
    </Variant>

    <Variant title="image-only — sin texto">
      <div style="height: 120px; border: 1px dashed #ccc; display: flex;">
        <CBrandLogo :src="src" :alt="alt" />
      </div>
    </Variant>

    <Variant title="image-only — slot ignorado">
      <div style="height: 120px; border: 1px dashed #ccc; display: flex;">
        <CBrandLogo :src="src" :alt="alt" layout="image-only">
          <span>Brand Name</span>
        </CBrandLogo>
      </div>
    </Variant>

    <Variant title="text-image — texto izquierda">
      <div style="height: 120px; border: 1px dashed #ccc; display: flex;">
        <CBrandLogo :src="src" :alt="alt" layout="text-image" :style="{ '--c-brand-logo-gap': state.gap }">
          <span>Brand Name</span>
        </CBrandLogo>
      </div>
      <template #controls>
        <HstText v-model="state.gap" title="--c-brand-logo-gap" />
      </template>
    </Variant>

    <Variant title="image-top — imagen arriba">
      <div style="height: 120px; border: 1px dashed #ccc; display: flex;">
        <CBrandLogo :src="src" :alt="alt" layout="image-top" :style="{ '--c-brand-logo-gap': state.gap }">
          <span>Brand Name</span>
        </CBrandLogo>
      </div>
      <template #controls>
        <HstText v-model="state.gap" title="--c-brand-logo-gap" />
      </template>
    </Variant>

    <Variant title="text-top — texto arriba">
      <div style="height: 120px; border: 1px dashed #ccc; display: flex;">
        <CBrandLogo :src="src" :alt="alt" layout="text-top" :style="{ '--c-brand-logo-gap': state.gap }">
          <span>Brand Name</span>
        </CBrandLogo>
      </div>
      <template #controls>
        <HstText v-model="state.gap" title="--c-brand-logo-gap" />
      </template>
    </Variant>

    <Variant title="Como enlace">
      <div style="height: 120px; border: 1px dashed #ccc; display: flex;">
        <CBrandLogo :src="src" :alt="alt" href="/" :style="{ '--c-brand-logo-gap': state.gap }">
          <span>Brand Name</span>
        </CBrandLogo>
      </div>
      <template #controls>
        <HstText v-model="state.gap" title="--c-brand-logo-gap" />
      </template>
    </Variant>

  </Story>
</template>
