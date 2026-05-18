<script setup>
import CLayoutDefault from './c-layout-default.vue'
import docs from './c-layout-default.md?raw'
</script>

<template>
  <Story title="Components/c-layout-default" :docs="docs">

    <Variant title="Default">
      <CLayoutDefault>
        <template #header>
          <div style="padding: 16px; background: #e0e0e0;">Header</div>
        </template>
        <div style="padding: 16px;">Main content</div>
        <template #footer>
          <div style="padding: 16px; background: #e0e0e0;">Footer</div>
        </template>
      </CLayoutDefault>
    </Variant>

  </Story>
</template>
