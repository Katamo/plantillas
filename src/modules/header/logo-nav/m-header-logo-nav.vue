<template>
  <div
    ref="el"
    class="m-header-logo-nav"
    :data-background="background || undefined"
  >
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
import { ref } from 'vue'
import { BWrapper, BGridLayout, BGridArea } from '@bedrock/core/vue'
import { useScrollShrink } from '../../../composables/use-scroll-shrink'

const props = defineProps({
  background: { type: String, default: null },
  shrink: { type: Boolean, default: false },
})

const el = ref(null)
useScrollShrink(el, { enabled: props.shrink })
</script>

<style lang="scss" src="./m-header-logo-nav.scss" />
