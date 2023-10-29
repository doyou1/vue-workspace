<script setup lang="ts">
import Recursion from "./recursion/Recursion.vue";

export type RecursionData = {
  title: string;
  child?: RecursionData;
}

const data: RecursionData = {
  title: "Parent",
  child: {
    title: "Parent child",
    child: {
      title: "Parent child child",
      child: {
        title: "Parent child child child",
        child: {
          title: "Parent child child child child",
        },
      },
    },
  }
}
</script>

<template>
  <h2>Recursion Component</h2>
  <Recursion :margin-left="10" :data="data"/>
</template>

<style scoped>
</style>