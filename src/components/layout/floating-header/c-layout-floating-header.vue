<template>
  <div class="c-layout-floating-header">
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
</script>

<style lang="scss" src="./c-layout-floating-header.scss" />
