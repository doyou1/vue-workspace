<template>
  <SplitterPanel v-bind="props" class="splitter-panel">
    <slot></slot>
  </SplitterPanel>
</template>

<script lang="ts">
/** 
 *　SplitterPanel인지를 name으로 판단
 * https://github.com/primefaces/primevue/blob/78b9416f066e41ac3e956966ec1dea42f6c33c21/components/lib/splitter/Splitter.vue#L83 
 * */
export default {
  name: 'SplitterPanel',
}
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import SplitterPanel, { SplitterPanelProps } from "primevue/splitterpanel";
const props = defineProps<SplitterPanelProps>();

</script>

<style scoped lang="scss">
.splitter-panel {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
