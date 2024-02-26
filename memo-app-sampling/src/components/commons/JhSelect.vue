<template>
  <el-select
    :model-value="modelValue"
    :style="innerStyle"
    @update:model-value="$emit('update:modelValue', $event as string)"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts">
export default {
  name: "JhSelect",
};
</script>

<script setup lang="ts">
import { ElSelect, ElOption } from "element-plus";
import { defineProps, defineEmits, computed, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options: {
      label: string;
      value: string;
    }[];
    width?: string;
  }>(),
  {
    width: "200px",
  },
);
// const emits = defineEmits({ ...inputEmits });
defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const innerStyle = computed(() => {
  return {
    "--jh-select-width": props.width,
  };
});
</script>

<style scoped>
.el-select {
  width: var(--jh-select-width);
}
</style>
