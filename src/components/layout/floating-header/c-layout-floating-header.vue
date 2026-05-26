<template>
  <div class="c-layout-floating-header" :data-variant="variant !== 'fixed' ? variant : undefined">
    <header class="c-layout-floating-header__header">
      <slot name="header" />
    </header>
    <main class="c-layout-floating-header__main">
      <slot />
      <footer class="c-layout-floating-header__footer">
        <slot name="footer" />
      </footer>
    </main>
  </div>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'fixed' },
})
</script>

<style lang="scss" src="./c-layout-floating-header.scss" />
