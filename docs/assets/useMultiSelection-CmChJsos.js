import { i as computed, ak as ref } from "./vendor-DbHuLTxc.js";
function useMultiSelection(orderedKeys, selectedKeys) {
  const anchor = ref(null);
  const selectedSet = computed(() => new Set(selectedKeys.value));
  function isSelected(key) {
    return selectedSet.value.has(key);
  }
  function handleClick(key, event = {}) {
    const next = new Set(selectedSet.value);
    if (event.shiftKey && anchor.value !== null) {
      const keys = orderedKeys.value;
      const from = keys.indexOf(anchor.value);
      const to = keys.indexOf(key);
      if (from !== -1 && to !== -1) {
        const [lo, hi] = from < to ? [from, to] : [to, from];
        for (let i = lo; i <= hi; i++) next.add(keys[i]);
      }
    } else if (event.ctrlKey || event.metaKey) {
      if (next.has(key)) next.delete(key);
      else next.add(key);
    } else {
      next.clear();
      next.add(key);
    }
    anchor.value = key;
    selectedKeys.value = [...next];
  }
  function toggle(key) {
    const next = new Set(selectedSet.value);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    anchor.value = key;
    selectedKeys.value = [...next];
  }
  function selectOnly(key) {
    anchor.value = key;
    selectedKeys.value = [key];
  }
  function selectAll() {
    selectedKeys.value = [...orderedKeys.value];
  }
  function clear() {
    anchor.value = null;
    selectedKeys.value = [];
  }
  const allSelected = computed(
    () => orderedKeys.value.length > 0 && orderedKeys.value.every((k) => selectedSet.value.has(k))
  );
  const someSelected = computed(() => selectedKeys.value.length > 0 && !allSelected.value);
  return {
    isSelected,
    handleClick,
    toggle,
    selectOnly,
    selectAll,
    clear,
    allSelected,
    someSelected,
    anchor
  };
}
export {
  useMultiSelection as u
};
