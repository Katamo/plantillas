<template>
  <div class="c-section-heading">
    <div class="heading">
      <span v-if="bar" class="bar" aria-hidden="true" />
      <span v-if="index" class="index">{{ index }}</span>
      <component :is="level" class="title">
        <slot />
      </component>
    </div>
    <div v-if="$slots.actions" class="actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  index: { type: String,  default: null },
  bar:   { type: Boolean, default: true },
  level: { type: String,  default: 'h2' },
})
</script>

<style lang="scss" src="./c-section-heading.scss" />
