<template>contents: {{ contents }}</template>

<script lang="ts">
export default {
  name: "MemoContentView",
};
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import { DataModelContent } from "@/composables/use-form-data";

defineProps<{
  contents: DataModelContent[];
}>();
</script>

<style scoped>

</style>
