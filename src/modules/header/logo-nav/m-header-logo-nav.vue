<template>
  <div class="m-header-logo-nav" :data-background="background || undefined">
    <BWrapper type="header">
      <BGridLayout layout="header">
        <BGridArea area="logo">
          <slot name="logo" />
        </BGridArea>
        <BGridArea area="nav">
          <slot name="nav" />
        </BGridArea>
      </BGridLayout>
    </BWrapper>
  </div>
</template>

<script setup>
import { BWrapper, BGridLayout, BGridArea } from '@bedrock/core/vue'

defineProps({
  background: { type: String, default: null },
})
</script>

<style lang="scss" src="./m-header-logo-nav.scss" />
