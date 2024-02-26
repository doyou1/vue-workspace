<template>content: {{ content }}</template>

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

</style>
