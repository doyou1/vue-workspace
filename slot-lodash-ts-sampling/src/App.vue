
<script setup lang="ts">
import AboutRecursion from "@/components/AboutRecursion.vue";
import AboutSlot from "@/components/AboutSlot.vue";
</script>

<template>
  <div class="border">
    <AboutRecursion />
  </div>
  <div class="border">
    <AboutSlot />
  </div>
</template>

<style scoped>
.border {
  border: solid 1px black;
}
</style>
