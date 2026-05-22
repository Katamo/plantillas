<script setup>
import MHeaderLogoNav from './m-header-logo-nav.vue'
import docs from './m-header-logo-nav.md?raw'
</script>

<template>
  <Story title="Modules/m-header-logo-nav" :docs="docs">

    <Variant title="Default">
      <MHeaderLogoNav>
        <template #logo>
          <div style="padding: 8px; background: #e0e0e0;">Logo</div>
        </template>
        <template #nav>
          <nav style="display: flex; gap: 16px;">
            <a href="#">Inicio</a>
            <a href="#">Blog</a>
            <a href="#">Contacto</a>
          </nav>
        </template>
      </MHeaderLogoNav>
    </Variant>

    <Variant title="background dark">
      <MHeaderLogoNav background="dark">
        <template #logo>
          <div style="padding: 8px; background: #333; color: white;">Logo</div>
        </template>
        <template #nav>
          <nav style="display: flex; gap: 16px; color: white;">
            <a href="#" style="color: white;">Inicio</a>
            <a href="#" style="color: white;">Blog</a>
            <a href="#" style="color: white;">Contacto</a>
          </nav>
        </template>
      </MHeaderLogoNav>
    </Variant>


    <Variant title="shrink">
      <div style="min-height: 2000px;">
        <MHeaderLogoNav :shrink="true" style="position: sticky; top: 0; background: white; z-index: 100;">
          <template #logo>
            <div style="padding: 8px; background: #e0e0e0;">Logo</div>
          </template>
          <template #nav>
            <nav style="display: flex; gap: 16px;">
              <a href="#">Inicio</a>
              <a href="#">Blog</a>
              <a href="#">Contacto</a>
            </nav>
          </template>
        </MHeaderLogoNav>
        <p style="padding: 24px; color: #888;">Desplázate hacia abajo para ver el header reducirse</p>
      </div>
    </Variant>

  </Story>
</template>
