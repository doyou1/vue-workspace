<template>
    <div class="basic-button">
        <img class="basic-button__icon" :src="`src/assets/icons/${data.icon}.svg`" alt=""/>
        <span class="basic-button__label">{{ data.label }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    data: { icon: string, label: string },
}>();
</script>

<style lang="scss" scoped>
.basic-button {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: calc(100% - 24px);
    height: 50px;

    gap: 16px;

    cursor: pointer;

    &__icon {
        width: 24px;
        height: 24px;
    }

    &__label {
        padding-top: 4px;
        font-size: 18px;
        font-family: 'MBC1961GulimM';
        color: $color-white-000;
    }

    &:hover {
        width: 100%;
        background-color: rgba($color-white-000, 0.1);
        border-radius: 12px;
    }
}
</style>