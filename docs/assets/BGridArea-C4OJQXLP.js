import { J as defineComponent, R as h } from "./vendor-DbHuLTxc.js";
const BGridLayout = defineComponent({
  name: "BGridLayout",
  inheritAttrs: false,
  props: {
    layout: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, { slots, attrs }) {
    return () => h(
      props.tag,
      {
        ...attrs,
        "data-grid-layout": props.layout,
        class: ["b-grid-layout", attrs.class]
      },
      slots.default ? slots.default() : []
    );
  }
});
const BGridArea = defineComponent({
  name: "BGridArea",
  inheritAttrs: false,
  props: {
    area: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, { slots, attrs }) {
    return () => h(
      props.tag,
      {
        ...attrs,
        "data-grid-area": props.area,
        class: ["b-grid-area", attrs.class]
      },
      slots.default ? slots.default() : []
    );
  }
});
export {
  BGridArea as B,
  BGridLayout as a
};
