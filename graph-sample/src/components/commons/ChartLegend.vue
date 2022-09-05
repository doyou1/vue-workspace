<template>
  <div>
    <div class="flex text-sm" v-for="(item, idx) in chartData.datasets" :key="idx">
      <template v-if="item.pointStyle === 'rect'">
        <legend-bar-icon
          class="w-20 h-auto mx-1 items-center"
          :fill="item.backgroundColor"
        />
      </template>
      <template v-else>
        <legend-dash-icon
          class="w-20 h-auto mx-1 items-center"
          :stroke="item.borderColor"
        />
      </template>
      <div class="grow text-left">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import LegendBarIcon from "../commons/legendicons/LegendBarIcon.vue";
import LegendDashIcon from "../commons/legendicons/LegendDashIcon.vue";

export default {
  props: {
    chartData: Object,
  },
  components: {
    LegendBarIcon,
    LegendDashIcon,
  },
  mounted() {
    console.log("ChartLegend");
    console.log(this.chartData.datasets);
  },
};
</script>

<style></style>
