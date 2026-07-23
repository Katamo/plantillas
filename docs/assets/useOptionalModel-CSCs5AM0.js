import { ak as ref, i as computed } from "./vendor-DbHuLTxc.js";
function useOptionalModel(props, name, emit, initial) {
  const internal = ref(props[name] !== void 0 ? props[name] : initial);
  return computed({
    get: () => props[name] !== void 0 ? props[name] : internal.value,
    set: (value) => {
      internal.value = value;
      emit(`update:${name}`, value);
    }
  });
}
export {
  useOptionalModel as u
};
