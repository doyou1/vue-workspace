
<script setup lang="ts">
import AboutRecursion from "@/components/AboutRecursion.vue";
import AboutSlot from "@/components/AboutSlot.vue";
import AboutLodash from "@/components/AboutLodash.vue";
</script>

<template>
  <div class="border">
    <AboutRecursion />
  </div>
  <div class="border">
    <AboutSlot />
  </div>
  <div class="border">
    <AboutLodash />
  </div>
</template>

<style scoped>
.border {
  border: solid 1px black;
}
</style>
