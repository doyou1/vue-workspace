
<template>
  <div> child count: {{ count }}</div>
  <button @click="plus">count plus!</button>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue';

const count = ref<number>(0);

const plus = () => {
  count.value++;
}

defineExpose<{
  count: number;
  plus: () => void;
}>({
  count,
  plus
});
</script>
