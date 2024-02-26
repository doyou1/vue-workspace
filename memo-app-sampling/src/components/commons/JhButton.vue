<template>
  <el-button v-bind="props" v-on="buttonEmits" @click="$emit('click', $event)">
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

const props = defineProps({ ...buttonProps });
defineEmits({ ...buttonEmits });
</script>

<style scoped></style>
