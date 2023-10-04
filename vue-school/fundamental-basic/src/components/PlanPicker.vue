<template>
  <div class="plans">
    <Plan v-for="plan in plans" :name="plan"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Plan from './Plan.vue';
const plans = ref(['The Single', 'The Curious', 'The Addict'])

</script>

<style>

</style>