<script setup>
import LegendIcon from "./legendicons/LegendIcon.vue";
const props = defineProps({
  chartData: Object,
});

</script>

<template>
  <div>
    <div class="flex text-sm" v-for="(item, idx) in chartData.datasets" :key="idx">
    <LegendIcon :style="item.legendStyle" :fill="item.legendColor" />
    <div class="grow text-left">
        {{ item.label }}
      </div>
  </div>
  </div>
</template>

