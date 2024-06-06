<template>
  <Splitter v-bind="props" class="splitter">
    <slot></slot>
  </Splitter>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import Splitter, { SplitterProps } from "primevue/splitter";

const props = defineProps<SplitterProps>();

</script>

<style scoped lang="scss">
.splitter {
  height: 300px;
}
</style>
