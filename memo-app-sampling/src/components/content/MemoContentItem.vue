<template>
  <div class="content-item">content: {{ content }}</div>
</template>

<script lang="ts">
export default {
  name: "MemoContentItem",
};
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import { DataModelContent } from "@/composables/use-form-data";
defineProps<{
  content: DataModelContent;
}>();
</script>

<style scoped>
.content-item {
  height: var(--memo-content-item-height);
  border: 1px solid var(--color-gray-100);
}
</style>
