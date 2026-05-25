<script setup>
import { ref } from 'vue'
import CHamburger from './c-hamburger.vue'
import docs from './c-hamburger.md?raw'

const isOpen = ref(false)
</script>

<template>
  <Story title="Components/c-hamburger" :docs="docs">

    <Variant title="Default — cerrado">
      <CHamburger />
    </Variant>

    <Variant title="Open — abierto">
      <CHamburger :open="true" />
    </Variant>

    <Variant title="Interactivo">
      <CHamburger :open="isOpen" @click="isOpen = !isOpen" />
      <p style="margin-top: 8px; font-size: 12px; color: #888;">Estado: {{ isOpen ? 'abierto' : 'cerrado' }}</p>
    </Variant>

  </Story>
</template>
