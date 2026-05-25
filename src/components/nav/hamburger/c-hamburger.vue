<template>
  <button
    class="c-hamburger"
    :data-open="open || undefined"
    :aria-label="open ? labelClose : labelOpen"
    :aria-expanded="open"
    @click="$emit('click')"
  >
    <span />
    <span />
    <span />
  </button>
</template>

<script setup>
defineProps({
  open:       { type: Boolean, default: false },
  labelOpen:  { type: String,  default: 'Abrir menú' },
  labelClose: { type: String,  default: 'Cerrar menú' },
})

defineEmits(['click'])
</script>

<style lang="scss" src="./c-hamburger.scss" />
