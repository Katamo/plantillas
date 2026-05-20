<template class="c-layout-default">
    <BGridLayout layout="default">
      <BGridArea area="header">
        <slot name="header" />
      </BGridArea>
      <BGridArea area="main">
        <slot />
      </BGridArea>
      <BGridArea area="footer">
        <slot name="footer" />
      </BGridArea>
    </BGridLayout>
</template>

<script setup>
import { BGridLayout, BGridArea } from '@bedrock/core/vue'
</script>

<style lang="scss" src="./c-layout-default.scss" />  // styles for footer area
