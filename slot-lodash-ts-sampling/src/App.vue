
<script setup lang="ts">
import { ref } from "vue";
import Child from "@/components/Child.vue";
export type ReData = {
  name: String;
  type: String;
  child?: ReData;
}

const data = ref<ReData>(
  {
    name: 'parent',
    type: 'parent type',
    child: {
      name: 'child',
      type: 'child type',
      child: {
        name: 'child child',
        type: 'child child type'
      }
    }
  }
)
</script>

<template>
  <Child :data="data"/>
</template>

<style scoped>
</style>
