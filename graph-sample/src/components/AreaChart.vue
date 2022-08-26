<template>
    <Line
    class="w-1/5 h-1/5"
    :chart-options="chartOptions"
    :chart-data="chartData"
  />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Filler
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Filler
);
export default {
  components: {
    Line,
  },
  props: {
    chartData: {
      type: Object,
    },
    chartOptions: {
      type: Object,
    },
  },
};
</script>

<style></style>
