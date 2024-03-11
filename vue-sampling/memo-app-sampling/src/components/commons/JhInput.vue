<template>
  <el-input
    v-bind="props"
    :model-value="modelValue"
    v-on="inputEmits"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <slot />
  </el-input>
</template>

<script lang="ts">
export default {
  name: "JhInput",
};
</script>

<script setup lang="ts">
import { ElInput, inputProps, inputEmits } from "element-plus";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  ...inputProps,
  modelValue: { type: String, default: "" },
});
// const emits = defineEmits({ ...inputEmits });
defineEmits({ ...inputEmits });
</script>
