
<template>
  <input :value="modelValue" @input="onInput" />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{ modelValue: string; }>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
const onInput = (e: InputEvent) => {
  emits("update:modelValue", e.target.value);
}
</script>
