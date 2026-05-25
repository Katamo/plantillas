<template>
    <Transition name="m-nav-drawer-fade">
        <div v-if="open" class="m-nav-drawer__backdrop" @click="$emit('close')" />
    </Transition>

    <Transition name="m-nav-drawer-slide">
        <nav v-if="open" class="m-nav-drawer">
            <CCloseButton class="m-nav-drawer__close" @click="$emit('close')" />
            <slot />
        </nav>
    </Transition>
</template>

<script setup>
import { CCloseButton } from '../../../components/nav/close-button';

defineProps({
    open: { type: Boolean, default: false },
})

defineEmits(['close'])
</script>

<style lang="scss" src="./m-nav-drawer.scss" />
