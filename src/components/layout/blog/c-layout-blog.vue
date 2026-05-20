<template>
  <BGridLayout layout="blog">
    <BGridArea area="header" tag="header">
      <slot name="header" />
    </BGridArea>
    <BGridArea area="main" tag="main">
      <slot />
      <footer class="c-layout-blog__footer">
        <slot name="footer" />
      </footer>
    </BGridArea>
  </BGridLayout>
</template>

<script setup>
import { BGridLayout, BGridArea } from '@bedrock/core/vue'
</script>

<style lang="scss" src="./c-layout-blog.scss" />
