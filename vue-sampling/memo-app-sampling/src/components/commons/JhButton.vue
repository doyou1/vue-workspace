<template>
  <el-button
    v-bind="props"
    :tabindex="tabindex"
    v-on="buttonEmits"
    @click="$emit('click', $event)"
  >
    <slot />
  </el-button>
</template>

<script lang="ts">
export default {
  name: "JhButton",
};
</script>

<script setup lang="ts">
import { ElButton, buttonProps, buttonEmits } from "element-plus";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  ...buttonProps,
  tabindex: {
    type: Number,
    default: 0,
  },
});
defineEmits({ ...buttonEmits });
</script>

<style scoped></style>
