<template>
  <component
    :is="href ? 'a' : 'article'"
    class="c-card-media"
    :href="href || undefined"
    :data-layout="layout || undefined"
    :data-size="size || undefined"
  >
    <div class="cover">
      <slot name="cover">
        <BImage v-if="coverSrc" :src="coverSrc" :alt="coverAlt" fit="cover" />
      </slot>
      <div v-if="$slots.tag" class="tag">
        <slot name="tag" />
      </div>
    </div>
    <div class="body">
      <p v-if="$slots.default" class="title">
        <slot />
      </p>
      <p v-if="$slots.subtitle" class="subtitle">
        <slot name="subtitle" />
      </p>
      <div v-if="$slots['meta-start'] || $slots['meta-end']" class="meta">
        <span class="meta-start"><slot name="meta-start" /></span>
        <span class="meta-end"><slot name="meta-end" /></span>
      </div>
      <div v-if="$slots.footer" class="footer">
        <slot name="footer" />
      </div>
    </div>
  </component>
</template>

<script setup>
import { BImage } from '@bedrock/core/vue'

defineProps({
  href:     { type: String, default: null },
  coverSrc: { type: String, default: null },
  coverAlt: { type: String, default: '' },
  layout:   { type: String, default: null },
  size:     { type: String, default: null },
})
</script>

<style lang="scss" src="./c-card-media.scss" />
