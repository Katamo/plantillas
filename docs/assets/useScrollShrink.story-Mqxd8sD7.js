import { ag as resolveComponent, a1 as openBlock, k as createBlock, aI as withCtx, u as createVNode, a9 as ref, B as defineComponent } from "./vendor-DxZlYKFk.js";
import { u as useScrollShrink } from "./useScrollShrink-Dem4q4Jr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const docs = "# useScrollShrink\n\nReduce progresivamente la altura de un elemento a medida que el usuario hace scroll. Cuando la reducción está completa añade `data-shrink` al elemento para permitir reacciones de estilo adicionales.\n\n## Uso en un componente\n\n### 1. Llamar el composable en el `<script setup>`\n\n```js\nimport { ref } from 'vue'\nimport { useScrollShrink } from '../../composables/use-scroll-shrink'\n\nconst props = defineProps({\n  shrink: { type: Boolean, default: false },\n})\n\nconst el = ref(null)\nuseScrollShrink(el, { enabled: props.shrink })\n```\n\n### 2. Mapear las CSS custom properties en el SCSS del componente\n\nEl composable lee cuatro propiedades genéricas del elemento. En el SCSS del componente hay que mapear sus propias variables a esas propiedades:\n\n```scss\n.c-mi-componente {\n  --scroll-shrink-max: var(--c-mi-componente-height);\n  --scroll-shrink-min: var(--c-mi-componente-height-min);\n  --scroll-shrink-start: var(--c-mi-componente-shrink-start);\n  --scroll-shrink-distance: var(--c-mi-componente-shrink-distance);\n}\n```\n\n## API\n\n### Parámetros\n\n| Parámetro | Tipo | Default | Descripción |\n|---|---|---|---|\n| `el` | `Ref<HTMLElement>` | — | Ref al elemento DOM que se va a reducir |\n| `options.enabled` | `Boolean` | `true` | Activa o desactiva el comportamiento |\n\n### CSS custom properties que lee el composable\n\n| Propiedad | Descripción |\n|---|---|\n| `--scroll-shrink-max` | Altura máxima (cuando `scrollY` ≤ `start`) |\n| `--scroll-shrink-min` | Altura mínima (cuando la reducción está completa) |\n| `--scroll-shrink-start` | Scroll a partir del cual empieza la reducción |\n| `--scroll-shrink-distance` | Distancia de scroll para completar la reducción |\n\n## Atributo de estado\n\nCuando la reducción está completa, el composable añade `data-shrink` al elemento. Se puede usar desde SCSS para aplicar estilos adicionales:\n\n```scss\n.c-mi-componente {\n  @include attr(shrink) {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  }\n}\n```\n\n## Ejemplo completo\n\n```vue\n<!-- c-mi-componente.vue -->\n<template>\n  <div ref=\"el\" class=\"c-mi-componente\">\n    <slot />\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nimport { useScrollShrink } from '../../composables/use-scroll-shrink'\n\nconst props = defineProps({\n  shrink: { type: Boolean, default: false },\n})\n\nconst el = ref(null)\nuseScrollShrink(el, { enabled: props.shrink })\n<\/script>\n\n<style lang=\"scss\" src=\"./c-mi-componente.scss\" />\n```\n\n```scss\n/* c-mi-componente.scss */\n@use 'bedrock-config' as *;\n\n:root {\n  --c-mi-componente-height: #{spacing(20)};\n  --c-mi-componente-height-min: #{spacing(14)};\n  --c-mi-componente-shrink-start: 0px;\n  --c-mi-componente-shrink-distance: 200px;\n}\n\n.c-mi-componente {\n  --scroll-shrink-max: var(--c-mi-componente-height);\n  --scroll-shrink-min: var(--c-mi-componente-height-min);\n  --scroll-shrink-start: var(--c-mi-componente-shrink-start);\n  --scroll-shrink-distance: var(--c-mi-componente-shrink-distance);\n\n  height: var(--c-mi-componente-height);\n}\n```\n";
const _sfc_main = {
  __name: "useScrollShrink.story",
  setup(__props, { expose: __expose }) {
    __expose();
    function makeDemo(style) {
      return defineComponent({
        setup() {
          const el = ref(null);
          useScrollShrink(el, { enabled: true });
          return { el };
        },
        template: `
      <div style="min-height: 2000px;">
        <div ref="el" style="${style}">Desplázate para ver el efecto</div>
        <p style="padding: 24px; color: #aaa;">↓ Scroll hacia abajo</p>
      </div>
    `
      });
    }
    const DemoDefault = makeDemo(`
  position: sticky; top: 0;
  display: flex; align-items: center; padding: 0 24px;
  background: #e0e0e0;
  --scroll-shrink-max: 80px;
  --scroll-shrink-min: 48px;
  --scroll-shrink-start: 0px;
  --scroll-shrink-distance: 200px;
`);
    const DemoWithStart = makeDemo(`
  position: sticky; top: 0;
  display: flex; align-items: center; padding: 0 24px;
  background: #d0e8ff;
  --scroll-shrink-max: 80px;
  --scroll-shrink-min: 48px;
  --scroll-shrink-start: 100px;
  --scroll-shrink-distance: 200px;
`);
    const __returned__ = { makeDemo, DemoDefault, DemoWithStart, defineComponent, ref, get useScrollShrink() {
      return useScrollShrink;
    }, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Composables/useScrollShrink",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["DemoDefault"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Con start offset (empieza a los 100px de scroll)" }, {
        default: withCtx(() => [
          createVNode($setup["DemoWithStart"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["docs"]);
}
_sfc_main.__file = "src/composables/use-scroll-shrink/useScrollShrink.story.vue";
const useScrollShrink_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/composables/use-scroll-shrink/useScrollShrink.story.vue"]]);
export {
  useScrollShrink_story as default
};
