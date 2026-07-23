const __resolved__virtual_storySource_srcModulesNavDrawerMNavDrawerStoryVue = `<script setup>
import { ref } from 'vue'
import MNavDrawer from './m-nav-drawer.vue'
import docs from './m-nav-drawer.md?raw'

const isOpen = ref(false)
<\/script>

<template>
  <Story title="Modules/m-nav-drawer" :docs="docs">

    <Variant title="Interactivo">
      <button @click="isOpen = true" style="padding: 8px 16px; cursor: pointer;">
        Abrir drawer
      </button>
      <MNavDrawer :open="isOpen" @close="isOpen = false">
        <a href="#" style="padding: 12px 0; border-bottom: 1px solid #eee; text-decoration: none; color: inherit;">Inicio</a>
        <a href="#" style="padding: 12px 0; border-bottom: 1px solid #eee; text-decoration: none; color: inherit;">Sobre mí</a>
        <a href="#" style="padding: 12px 0; border-bottom: 1px solid #eee; text-decoration: none; color: inherit;">Archivo</a>
      </MNavDrawer>
    </Variant>

  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcModulesNavDrawerMNavDrawerStoryVue as default
};
