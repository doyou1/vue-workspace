<template>
  <el-dialog
    class="default-dialog"
    :model-value="visible"
    @close="$emit('close')"
  >
    Default Dialog
    <template #footer> Default Footer </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { ElDialog } from "element-plus";

defineProps<{
  visible: boolean;
}>();

defineEmits<{
  (e: "close"): void;
}>();
</script>

<style scoped></style>
