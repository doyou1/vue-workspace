<template>
    <div class="basic-layout" :layout-theme="theme" >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
interface Props {
    theme?: string
}
const { theme } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.basic-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: $color-white-100;
    border-radius: 24px;

    &[layout-theme="blue"] {
        background-color: $color-blue-000;
    }
}
</style>