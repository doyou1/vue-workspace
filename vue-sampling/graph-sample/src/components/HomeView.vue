<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <div class="flex-1 flex items-center justify-center">
            <div class="">
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <p>PcsDetailChartComposition</p>
  <div class="bg-gray-800">
    <PcsDetailChartComposition />
  </div>
  <p>PcsDetail Chart</p>
  <div class="bg-gray-800">
    <pcs-detail-chart />
  </div>

  <p>DayState Chart</p>
  <div class="bg-gray-800">
    <day-state-chart />
  </div>

  <p>line-view</p>
  <line-view class="m-10" :chartData="chartData"></line-view>

  <!-- for debug -->
  <!-- <div class="m-10">parent: {{ chartData }}</div> -->
  <!-- <input-view class="m-10" v-model="chartData"></input-view> -->
  <p>doughnut-chart</p>
  <doughnut-chart class="m-10"> </doughnut-chart>

  <p>area-chart</p>
  <area-chart
    class="m-10"
    :chartData="fillChartData"
    :chartOptions="chartOptions"
  ></area-chart>
</template>

<script>
import LineView from "./charts/LineChart.vue";
// import InputView from "./InputView.vue";
import DoughnutChart from "./charts/DoughnutChart.vue";
import AreaChart from "./charts/AreaChart.vue";
import DayStateChart from "./charts/DayStateChart.vue";
import PcsDetailChart from "./charts/PcsDetailChart.vue";
import PcsDetailChartComposition from "./charts/PcsDetailChartComposition.vue";

export default {
  name: "HomeView",
  components: {
    LineView,
    // InputView,
    DoughnutChart,
    AreaChart,
    DayStateChart,
    PcsDetailChart,
    PcsDetailChartComposition,
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Data 1",
            backgroundColor: "#ff0000",
            data: [40, 20, 12],
            borderColor: "#ff0000",
            borderWidth: 1,
          },
          {
            label: "Data 2",
            backgroundColor: "#00ff00",
            data: [30, 30, 18],
            borderColor: "#00ff00",
            borderWidth: 1,
          },
          {
            label: "Data 3",
            backgroundColor: "#0000ff",
            data: [50, 40, 24],
            borderColor: "#0000ff",
            borderWidth: 1,
          },
        ],
      },
      fillChartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Data 1",
            backgroundColor: "#ff000077",
            data: [40, 20, 12],
            fill: "start",
          },
          {
            label: "Data 3",
            backgroundColor: "#0000ff",
            data: [30, 40, 24],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tension: 0.4,
      },
    };
  },
};
</script>

<style></style>
