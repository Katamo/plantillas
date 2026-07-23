import { J as defineComponent, R as h, ac as openBlock, r as createElementBlock, z as createVNode, aX as withCtx, ap as renderSlot, ak as ref, ar as resolveComponent, n as createBlock, l as createBaseVNode } from "./vendor-DbHuLTxc.js";
import { B as BGridArea, a as BGridLayout } from "./BGridArea-C4OJQXLP.js";
import { u as useScrollShrink } from "./useScrollShrink-D1bK8XIA.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const BWrapper = defineComponent({
  name: "BWrapper",
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "default"
    },
    tag: {
      type: String,
      default: "div"
    },
    height: {
      type: String,
      default: null
    }
  },
  setup(props, { slots, attrs }) {
    return () => h(
      props.tag,
      {
        ...attrs,
        "data-type": props.type,
        ...props.height ? { "data-height": props.height } : {},
        class: ["b-wrapper", attrs.class]
      },
      slots.default ? slots.default() : []
    );
  }
});
const _sfc_main$1 = {
  __name: "m-header-logo-nav",
  props: {
    background: { type: String, default: null },
    shrink: { type: Boolean, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const el = ref(null);
    useScrollShrink(el, { enabled: props.shrink });
    const __returned__ = { props, el, ref, get BWrapper() {
      return BWrapper;
    }, get BGridLayout() {
      return BGridLayout;
    }, get BGridArea() {
      return BGridArea;
    }, get useScrollShrink() {
      return useScrollShrink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1$1 = ["data-background"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "el",
    class: "m-header-logo-nav",
    "data-background": $props.background || void 0
  }, [
    createVNode($setup["BWrapper"], { type: "header" }, {
      default: withCtx(() => [
        createVNode($setup["BGridLayout"], { layout: "header" }, {
          default: withCtx(() => [
            createVNode($setup["BGridArea"], { area: "logo" }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "logo")
              ]),
              _: 3
              /* FORWARDED */
            }),
            createVNode($setup["BGridArea"], { area: "nav" }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "nav")
              ]),
              _: 3
              /* FORWARDED */
            })
          ]),
          _: 3
          /* FORWARDED */
        })
      ]),
      _: 3
      /* FORWARDED */
    })
  ], 8, _hoisted_1$1);
}
_sfc_main$1.__file = "src/modules/header/logo-nav/m-header-logo-nav.vue";
const MHeaderLogoNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/modules/header/logo-nav/m-header-logo-nav.vue"]]);
const docs = '# m-header-logo-nav\n\nCabecera horizontal con dos áreas: logo a la izquierda y navegación a la derecha. Soporta variante de fondo oscuro y reducción progresiva de altura al hacer scroll.\n\n## Dependencias Bedrock\n\nRequiere `BWrapper`, `BGridLayout` y `BGridArea` de `@bedrock/core`.\n\n## Props\n\n| Prop | Tipo | Default | Descripción |\n|---|---|---|---|\n| `background` | `String` | `null` | Variante de fondo. Valor válido: `dark` |\n| `shrink` | `Boolean` | `false` | Activa la reducción progresiva de altura al hacer scroll |\n\n## Slots\n\n| Slot | Descripción |\n|---|---|\n| `logo` | Área izquierda para el logotipo |\n| `nav` | Área derecha para la navegación |\n\n## Variantes\n\n| `data-background` | Descripción |\n|---|---|\n| *(sin atributo)* | Fondo transparente |\n| `dark` | Fondo oscuro (`surface.dark`) con texto claro |\n\n## CSS Custom Properties\n\n| Propiedad | Default | Descripción |\n|---|---|---|\n| `--m-header-logo-nav-height` | `spacing(20)` — 80px | Alto máximo del header (scroll top 0) |\n| `--m-header-logo-nav-height-min` | `spacing(14)` — 56px | Alto mínimo cuando `shrink` está activo |\n| `--m-header-logo-nav-shrink-start` | `0px` | Scroll a partir del cual empieza la reducción |\n| `--m-header-logo-nav-shrink-distance` | `200px` | Distancia de scroll en la que se completa la reducción |\n\n```css\n.mi-pagina {\n  --m-header-logo-nav-height: 96px;\n  --m-header-logo-nav-height-min: 60px;\n  --m-header-logo-nav-shrink-distance: 300px;\n}\n```\n\n## Ejemplo de uso\n\n```vue\n<MHeaderLogoNav background="dark" :shrink="true">\n  <template #logo>\n    <CBrandLogo src="/logo.svg" alt="Marca" />\n  </template>\n  <template #nav>\n    <nav>...</nav>\n  </template>\n</MHeaderLogoNav>\n```\n\nEl header debe estar posicionado como `sticky` o `fixed` en la página para que el efecto sea visible durante el scroll. `c-layout-blog` ya gestiona esto cuando el header se usa como slot `#header`.\n';
const _sfc_main = {
  __name: "m-header-logo-nav.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { MHeaderLogoNav, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { style: { "min-height": "2000px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Modules/m-header-logo-nav",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["MHeaderLogoNav"], null, {
            logo: withCtx(() => [..._cache[0] || (_cache[0] = [
              createBaseVNode(
                "div",
                { style: { "padding": "8px", "background": "#e0e0e0" } },
                "Logo",
                -1
                /* CACHED */
              )
            ])]),
            nav: withCtx(() => [..._cache[1] || (_cache[1] = [
              createBaseVNode(
                "nav",
                { style: { "display": "flex", "gap": "16px" } },
                [
                  createBaseVNode("a", { href: "#" }, "Inicio"),
                  createBaseVNode("a", { href: "#" }, "Blog"),
                  createBaseVNode("a", { href: "#" }, "Contacto")
                ],
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "background dark" }, {
        default: withCtx(() => [
          createVNode($setup["MHeaderLogoNav"], { background: "dark" }, {
            logo: withCtx(() => [..._cache[2] || (_cache[2] = [
              createBaseVNode(
                "div",
                { style: { "padding": "8px", "background": "#333", "color": "white" } },
                "Logo",
                -1
                /* CACHED */
              )
            ])]),
            nav: withCtx(() => [..._cache[3] || (_cache[3] = [
              createBaseVNode(
                "nav",
                { style: { "display": "flex", "gap": "16px", "color": "white" } },
                [
                  createBaseVNode("a", {
                    href: "#",
                    style: { "color": "white" }
                  }, "Inicio"),
                  createBaseVNode("a", {
                    href: "#",
                    style: { "color": "white" }
                  }, "Blog"),
                  createBaseVNode("a", {
                    href: "#",
                    style: { "color": "white" }
                  }, "Contacto")
                ],
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "shrink" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["MHeaderLogoNav"], {
              shrink: true,
              style: { "position": "sticky", "top": "0", "background": "white", "z-index": "100" }
            }, {
              logo: withCtx(() => [..._cache[4] || (_cache[4] = [
                createBaseVNode(
                  "div",
                  { style: { "padding": "8px", "background": "#e0e0e0" } },
                  "Logo",
                  -1
                  /* CACHED */
                )
              ])]),
              nav: withCtx(() => [..._cache[5] || (_cache[5] = [
                createBaseVNode(
                  "nav",
                  { style: { "display": "flex", "gap": "16px" } },
                  [
                    createBaseVNode("a", { href: "#" }, "Inicio"),
                    createBaseVNode("a", { href: "#" }, "Blog"),
                    createBaseVNode("a", { href: "#" }, "Contacto")
                  ],
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _cache[6] || (_cache[6] = createBaseVNode(
              "p",
              { style: { "padding": "24px", "color": "#888" } },
              "Desplázate hacia abajo para ver el header reducirse",
              -1
              /* CACHED */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["docs"]);
}
_sfc_main.__file = "src/modules/header/logo-nav/m-header-logo-nav.story.vue";
const mHeaderLogoNav_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/modules/header/logo-nav/m-header-logo-nav.story.vue"]]);
export {
  mHeaderLogoNav_story as default
};
