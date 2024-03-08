<template>
  <el-dialog
    class="custom3-dialog"
    :model-value="visible"
    append-to="#dialog"
    @close="$emit('close')"
  >
    Custom2 Dialog
    <template #footer>
      Custom2 Footer
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
