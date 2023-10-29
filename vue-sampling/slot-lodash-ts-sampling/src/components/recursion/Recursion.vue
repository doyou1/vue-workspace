<script lang="ts">
export default {
  name: "RecursionChild",  
};
</script>

<script setup lang="ts">
import { RecursionData } from '@/components/AboutRecursion.vue';
defineProps<{
  data: RecursionData;
  marginLeft: number;
}>();


</script>

<template>
    <div :style="{'margin-left': marginLeft + 'px'}">
        <div>{{ data.title }}</div>
        <RecursionChild v-if="data.child" :data="data.child" :margin-left="marginLeft + 10"/>
    </div>
</template>

<style scoped>
</style>