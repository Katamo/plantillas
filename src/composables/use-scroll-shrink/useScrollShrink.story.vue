<script setup>
import { defineComponent, ref } from 'vue'
import { useScrollShrink } from './useScrollShrink'
import docs from './useScrollShrink.md?raw'

function makeDemo(style) {
  return defineComponent({
    setup() {
      const el = ref(null)
      useScrollShrink(el, { enabled: true })
      return { el }
    },
    template: `
      <div style="min-height: 2000px;">
        <div ref="el" style="${style}">Desplázate para ver el efecto</div>
        <p style="padding: 24px; color: #aaa;">↓ Scroll hacia abajo</p>
      </div>
    `,
  })
}

const DemoDefault = makeDemo(`
  position: sticky; top: 0;
  display: flex; align-items: center; padding: 0 24px;
  background: #e0e0e0;
  --scroll-shrink-max: 80px;
  --scroll-shrink-min: 48px;
  --scroll-shrink-start: 0px;
  --scroll-shrink-distance: 200px;
`)

const DemoWithStart = makeDemo(`
  position: sticky; top: 0;
  display: flex; align-items: center; padding: 0 24px;
  background: #d0e8ff;
  --scroll-shrink-max: 80px;
  --scroll-shrink-min: 48px;
  --scroll-shrink-start: 100px;
  --scroll-shrink-distance: 200px;
`)
</script>

<template>
  <Story title="Composables/useScrollShrink" :docs="docs">

    <Variant title="Default">
      <DemoDefault />
    </Variant>

    <Variant title="Con start offset (empieza a los 100px de scroll)">
      <DemoWithStart />
    </Variant>

  </Story>
</template>
