<script setup>
import CSectionHeading from './c-section-heading.vue'
import docs from './c-section-heading.md?raw'
</script>

<template>
  <Story title="Components/c-section-heading" :docs="docs">
    <Variant title="Default — barra + título">
      <div style="width: 480px">
        <CSectionHeading>Título de sección</CSectionHeading>
      </div>
    </Variant>

    <Variant title="Con índice">
      <div style="width: 480px">
        <CSectionHeading index="/01">Últimos lanzamientos</CSectionHeading>
      </div>
    </Variant>

    <Variant title="Con acciones">
      <div style="width: 480px">
        <CSectionHeading index="/02">
          Próximamente
          <template #actions>
            <a href="#" style="font-size: 12px">VER TODO →</a>
          </template>
        </CSectionHeading>
      </div>
    </Variant>

    <Variant title="Sin barra, nivel h3">
      <div style="width: 480px">
        <CSectionHeading :bar="false" level="h3">Bloque secundario</CSectionHeading>
      </div>
    </Variant>
  </Story>
</template>
