<template>
  <button
    class="c-button"
    :data-type="type || undefined"
    :data-size="size || undefined"
    :data-disabled="disabled || undefined"
  >
    <span class="container">
      <slot />
    </span>
  </button>
</template>

<script setup>
defineProps({
  type:     { type: String,  default: null },
  size:     { type: String,  default: null },
  disabled: { type: Boolean, default: false },
})
</script>

<style lang="scss" src="./c-button.scss" />
