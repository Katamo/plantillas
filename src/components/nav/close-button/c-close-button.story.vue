<script setup>
import CCloseButton from './c-close-button.vue'
import docs from './c-close-button.md?raw'
</script>

<template>
  <Story title="Components/c-close-button" :docs="docs">

    <Variant title="Default">
      <CCloseButton />
    </Variant>

    <Variant title="Label personalizado">
      <CCloseButton label="Cerrar panel" />
    </Variant>

  </Story>
</template>
