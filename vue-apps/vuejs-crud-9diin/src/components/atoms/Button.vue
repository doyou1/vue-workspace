<script setup>
defineProps({
  theme: {
    type: String,
    required: true,
    default: 'normal',
  },
  label: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <button :data-theme="theme" class="button">{{  label }}</button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.button {
  outline: none;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  border: 1px solid #000;

  border-radius: 4px;
  background: transparent;
  cursor: pointer;

  &:hover{
    background-color: $color-white-300;
  }

  &[data-theme='filled'] {
    background-color: $color-orange-100;
    color: $color-white-100;


    &:hover {
      border: 1px solide $color-orange-200;
      background-color: $color-orange-200;
    }
  }

  &[data-theme='secondary'] {
    border: 1px solid $color-orange-000;
    background-color: $color-white-000;
    color: $color-orange-100;

    &:hover {
      background-color: $color-white-100;
    }
  }

  &[data-theme='ghost'] {
    border: 1px solid $color-white-600;
    background-color: $color-white-300;
    color: $color-white-600;

    &:hover {
      background-color: #e7e7e7;
    }
  }
}
</style>
