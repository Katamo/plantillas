<template class="c-layout-default">
    <BGridLayout layout="default">
      <BGridArea area="header" tag="header">
        <slot name="header" />
      </BGridArea>
      <BGridArea area="main" tag="main">
        <slot />
      </BGridArea>
      <BGridArea area="footer" tag="footer">
        <slot name="footer" />
      </BGridArea>
    </BGridLayout>
</template>

<script setup>
import { BGridLayout, BGridArea } from '@bedrock/core/vue'
</script>

<style lang="scss" src="./c-layout-default.scss" />  // styles for footer area
