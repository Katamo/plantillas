<template>
  <button
    class="c-close-button"
    :aria-label="label"
    @click="$emit('click')"
  >✕</button>
</template>

<script setup>
defineProps({
  label: { type: String, default: 'Cerrar' },
})

defineEmits(['click'])
</script>

<style lang="scss" src="./c-close-button.scss" />
