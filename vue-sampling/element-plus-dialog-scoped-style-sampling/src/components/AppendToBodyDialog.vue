<template>
  <el-dialog
    class="append-to-body-dialog"
    :model-value="visible"
    append-to="#dialog"
    @close="$emit('close')"
  >
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
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
