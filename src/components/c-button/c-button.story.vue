<script setup>
import CButton from './c-button.vue'
</script>

<template>
  <Story title="Components/c-button">
    <Variant title="Default">
      <CButton>Click me</CButton>
    </Variant>

    <Variant title="Ghost">
      <CButton type="ghost">Click me</CButton>
    </Variant>

    <Variant title="Large">
      <CButton size="large">Click me</CButton>
    </Variant>

    <Variant title="Disabled">
      <CButton :disabled="true">Click me</CButton>
    </Variant>
  </Story>
</template>
