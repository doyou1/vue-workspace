<template>
  <el-input-number
    v-bind="props"
    :model-value="modelValue"
    v-on="inputNumberEmits"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<script lang="ts">
export default {
  name: "JhInputNumber",
};
</script>

<script setup lang="ts">
import {
  ElInputNumber,
  inputNumberProps,
  inputNumberEmits,
} from "element-plus";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  ...inputNumberProps,
  modelValue: { type: Number, default: 0 },
});
defineEmits({ ...inputNumberEmits });
</script>
