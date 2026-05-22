import { C as defineComponent, L as h, a2 as openBlock, o as createElementBlock, v as createVNode, aJ as withCtx, af as renderSlot, m as createCommentVNode, ah as resolveComponent, k as createBlock, i as createBaseVNode, U as normalizeStyle, a8 as reactive } from "./vendor-DOvsOfdG.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const BImage = defineComponent({
  name: "BImage",
  inheritAttrs: false,
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: "" },
    fit: { type: String, default: null },
    loading: { type: String, default: "lazy" },
    width: { type: [String, Number], default: null },
    height: { type: [String, Number], default: null },
    srcset: { type: String, default: null },
    sizes: { type: String, default: null },
    draggable: { type: Boolean, default: false }
  },
  setup(props, { slots, attrs }) {
    return () => {
      const { class: extraClass, ...restAttrs } = attrs;
      const hasCaption = !!slots.caption;
      const imgProps = {
        src: props.src,
        alt: props.alt,
        loading: props.loading,
        draggable: props.draggable ? void 0 : "false",
        ...props.width && { width: props.width },
        ...props.height && { height: props.height },
        ...props.srcset && { srcset: props.srcset },
        ...props.sizes && { sizes: props.sizes }
      };
      return h("figure", {
        ...restAttrs,
        class: ["b-image", extraClass],
        ...props.fit && { "data-fit": props.fit },
        ...hasCaption && { "data-has-caption": "" }
      }, [
        h("img", imgProps),
        hasCaption ? h("figcaption", { class: "caption" }, slots.caption()) : null
      ]);
    };
  }
});
const BLogo = defineComponent({
  name: "BLogo",
  inheritAttrs: false,
  props: {
    src: { type: String, default: null },
    alt: { type: String, default: "" },
    href: { type: String, default: null },
    disabled: { type: Boolean, default: false }
  },
  setup(props, { slots, attrs }) {
    return () => {
      const { class: extraClass, ...restAttrs } = attrs;
      const isLink = !!props.href;
      const hasText = !!slots.default;
      return h(
        "div",
        {
          ...restAttrs,
          class: ["b-logo", extraClass],
          ...isLink && { "data-has-pointer": "" },
          ...hasText && { "data-has-text": "" },
          ...props.disabled && { "data-disabled": "" }
        },
        h(isLink ? "a" : "div", {
          class: "logo",
          ...isLink && { href: props.href }
        }, [
          ...props.src ? [h(BImage, {
            src: props.src,
            alt: props.alt,
            loading: "eager",
            fit: "contain"
          })] : [],
          ...hasText ? slots.default() : []
        ])
      );
    };
  }
});
const _sfc_main$1 = {
  __name: "c-brand-logo",
  props: {
    src: { type: String, dafault: null },
    alt: { type: String, default: "" },
    href: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    layout: { type: String, default: null }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get BLogo() {
      return BLogo;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1$1 = ["data-layout"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "c-brand-logo",
    "data-layout": $props.layout || void 0
  }, [
    createVNode($setup["BLogo"], {
      src: $props.src,
      alt: $props.alt,
      href: $props.href,
      disabled: $props.disabled
    }, {
      default: withCtx(() => [
        $props.layout !== "image-only" ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["src", "alt", "href", "disabled"])
  ], 8, _hoisted_1$1);
}
_sfc_main$1.__file = "src/components/brand/logo/c-brand-logo.vue";
const CBrandLogo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/brand/logo/c-brand-logo.vue"]]);
const docs = '# c-brand-logo\n\nExtiende el componente `BLogo` de Bedrock añadiendo control sobre la disposición relativa entre imagen y texto mediante el atributo `data-layout`.\n\n## Dependencias Bedrock\n\nRequiere `BLogo` y `BImage` de `@bedrock/core`. Sus estilos se importan automáticamente desde el SCSS del componente.\n\n## Props\n\n| Prop | Tipo | Requerido | Default | Descripción |\n|---|---|---|---|---|\n| `src` | `String` | Sí | — | Ruta de la imagen del logo |\n| `alt` | `String` | No | `\'\'` | Texto alternativo de la imagen |\n| `href` | `String` | No | `null` | Si se proporciona, el logo se convierte en enlace |\n| `disabled` | `Boolean` | No | `false` | Deshabilita el enlace si `href` está presente |\n| `layout` | `String` | No | `null` | Disposición imagen/texto (ver variantes) |\n\n## Slot\n\nEl slot por defecto es el texto o contenido que acompaña al logo. Se ignora automáticamente cuando `layout="image-only"`.\n\n```html\n<CBrandLogo src="/logo.svg" alt="Mi marca">\n  <span>Mi marca</span>\n</CBrandLogo>\n```\n\n## Variantes de layout\n\n| `data-layout` | Disposición |\n|---|---|\n| *(sin atributo)* | Imagen izquierda, texto derecha |\n| `text-image` | Texto izquierda, imagen derecha |\n| `image-top` | Imagen arriba, texto abajo |\n| `text-top` | Texto arriba, imagen abajo |\n| `image-only` | Solo imagen (slot no se renderiza) |\n\n## CSS Custom Properties\n\n| Propiedad | Default | Descripción |\n|---|---|---|\n| `--c-brand-logo-gap` | `12px` | Espacio entre imagen y texto |\n\nSobrescribible por contexto sin modificar el componente:\n\n```css\n.mi-header {\n  --c-brand-logo-gap: 8px;\n}\n```\n\n## Ejemplos\n\n```html\n<!-- Imagen + texto (default) -->\n<div class="c-brand-logo">\n  <span>Marca</span>\n</div>\n\n<!-- Solo imagen -->\n<div class="c-brand-logo" data-layout="image-only">...</div>\n\n<!-- Texto a la izquierda -->\n<div class="c-brand-logo" data-layout="text-image">...</div>\n\n<!-- Apilado con imagen arriba -->\n<div class="c-brand-logo" data-layout="image-top">...</div>\n```\n';
const src = "/placeholder-logo.svg";
const alt = "Brand";
const _sfc_main = {
  __name: "c-brand-logo.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({
      gap: "12px"
    });
    const __returned__ = { src, alt, state, reactive, CBrandLogo, get docs() {
      return docs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1 = { style: { "height": "120px", "border": "1px dashed #ccc", "display": "flex" } };
const _hoisted_2 = { style: { "height": "120px", "border": "1px dashed #ccc", "display": "flex" } };
const _hoisted_3 = { style: { "height": "120px", "border": "1px dashed #ccc", "display": "flex" } };
const _hoisted_4 = { style: { "height": "120px", "border": "1px dashed #ccc", "display": "flex" } };
const _hoisted_5 = { style: { "height": "120px", "border": "1px dashed #ccc", "display": "flex" } };
const _hoisted_6 = { style: { "height": "120px", "border": "1px dashed #ccc", "display": "flex" } };
const _hoisted_7 = { style: { "height": "120px", "border": "1px dashed #ccc", "display": "flex" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/c-brand-logo",
    docs: $setup.docs
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default — imagen + texto" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.state.gap,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.gap = $event),
            title: "--c-brand-logo-gap"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["CBrandLogo"], {
              src: $setup.src,
              alt: $setup.alt,
              style: normalizeStyle({ "--c-brand-logo-gap": $setup.state.gap })
            }, {
              default: withCtx(() => [..._cache[5] || (_cache[5] = [
                createBaseVNode(
                  "span",
                  null,
                  "Brand Name",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["style"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "image-only — sin texto" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["CBrandLogo"], {
              src: $setup.src,
              alt: $setup.alt
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "image-only — slot ignorado" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["CBrandLogo"], {
              src: $setup.src,
              alt: $setup.alt,
              layout: "image-only"
            }, {
              default: withCtx(() => [..._cache[6] || (_cache[6] = [
                createBaseVNode(
                  "span",
                  null,
                  "Brand Name",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "text-image — texto izquierda" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.state.gap,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.gap = $event),
            title: "--c-brand-logo-gap"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createVNode($setup["CBrandLogo"], {
              src: $setup.src,
              alt: $setup.alt,
              layout: "text-image",
              style: normalizeStyle({ "--c-brand-logo-gap": $setup.state.gap })
            }, {
              default: withCtx(() => [..._cache[7] || (_cache[7] = [
                createBaseVNode(
                  "span",
                  null,
                  "Brand Name",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["style"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "image-top — imagen arriba" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.state.gap,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.gap = $event),
            title: "--c-brand-logo-gap"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createVNode($setup["CBrandLogo"], {
              src: $setup.src,
              alt: $setup.alt,
              layout: "image-top",
              style: normalizeStyle({ "--c-brand-logo-gap": $setup.state.gap })
            }, {
              default: withCtx(() => [..._cache[8] || (_cache[8] = [
                createBaseVNode(
                  "span",
                  null,
                  "Brand Name",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["style"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "text-top — texto arriba" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.state.gap,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.gap = $event),
            title: "--c-brand-logo-gap"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_6, [
            createVNode($setup["CBrandLogo"], {
              src: $setup.src,
              alt: $setup.alt,
              layout: "text-top",
              style: normalizeStyle({ "--c-brand-logo-gap": $setup.state.gap })
            }, {
              default: withCtx(() => [..._cache[9] || (_cache[9] = [
                createBaseVNode(
                  "span",
                  null,
                  "Brand Name",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["style"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Como enlace" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.state.gap,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.gap = $event),
            title: "--c-brand-logo-gap"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_7, [
            createVNode($setup["CBrandLogo"], {
              src: $setup.src,
              alt: $setup.alt,
              href: "/",
              style: normalizeStyle({ "--c-brand-logo-gap": $setup.state.gap })
            }, {
              default: withCtx(() => [..._cache[10] || (_cache[10] = [
                createBaseVNode(
                  "span",
                  null,
                  "Brand Name",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["style"])
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
_sfc_main.__file = "src/components/brand/logo/c-brand-logo.story.vue";
const cBrandLogo_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/oscar/Documents/__WORK/plantillas/src/components/brand/logo/c-brand-logo.story.vue"]]);
export {
  cBrandLogo_story as default
};
