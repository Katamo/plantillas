<template>
  <div class="c-brand-logo" :data-layout="layout || undefined">
    <BLogo :src="src" :alt="alt" :href="href" :disabled="disabled">
      <slot v-if="layout !== 'image-only'" />
    </BLogo>
  </div>
</template>

<script setup>
import { BLogo } from '@bedrock/core/vue'

defineProps({
  src:      { type: String,  required: true },
  alt:      { type: String,  default: '' },
  href:     { type: String,  default: null },
  disabled: { type: Boolean, default: false },
  layout:   { type: String,  default: null },
})
</script>

<style lang="scss" src="./c-brand-logo.scss" />
