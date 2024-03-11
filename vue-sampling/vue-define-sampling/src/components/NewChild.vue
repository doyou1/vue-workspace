<template>
  <input v-model="modelValue" />
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const modelValue = defineModel<string>();
</script>
