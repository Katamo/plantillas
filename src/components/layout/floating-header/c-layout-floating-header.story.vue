<script setup>
import CLayoutFloatingHeader from './c-layout-floating-header.vue'
import docs from './c-layout-floating-header.md?raw'
</script>

<template>
  <Story title="Components/c-layout-floating-header" :docs="docs">

    <Variant title="Default">
      <CLayoutFloatingHeader>
        <template #header>
          <div style="height: 100%; display: flex; align-items: center; padding: 0 24px; background: #1a1a1a; color: #fff;">
            Header flotante
          </div>
        </template>
        <div style="padding: 24px;">
          <p v-for="i in 20" :key="i" style="margin-bottom: 16px; color: #444;">
            Párrafo de contenido {{ i }}. El header permanece fijo sobre este contenido mientras se hace scroll.
          </p>
        </div>
        <template #footer>
          <div style="padding: 24px; background: #f5f5f5; border-top: 1px solid #e0e0e0;">Footer</div>
        </template>
      </CLayoutFloatingHeader>
    </Variant>

    <Variant title="Header transparente">
      <CLayoutFloatingHeader>
        <template #header>
          <div style="height: 100%; display: flex; align-items: center; padding: 0 24px; background: rgba(255,255,255,0.85); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(0,0,0,0.08);">
            Header semitransparente
          </div>
        </template>
        <div style="background: linear-gradient(to bottom, #2563eb 0%, #2563eb 200px, #f5f5f5 200px); min-height: 600px; padding: 24px;">
          <p style="color: #fff; margin-bottom: 16px;">El header semitransparente permite ver el contenido por debajo.</p>
          <p v-for="i in 15" :key="i" style="margin-bottom: 16px; color: #444; margin-top: 200px;" v-if="i === 1">
            Contenido que continúa después del gradiente.
          </p>
          <p v-for="i in 15" :key="'b'+i" style="margin-bottom: 16px; color: #444;">
            Párrafo {{ i }} de contenido bajo el header.
          </p>
        </div>
      </CLayoutFloatingHeader>
    </Variant>

  </Story>
</template>
