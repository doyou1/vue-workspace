<template>
  <div class="plan">
    <div class="description">
        <span class="title">
            {{ name }}
        </span>
    </div>
  </div>
</template>

<script setup>
const { name } = defineProps({ name: String });

</script>

<style>

</style>