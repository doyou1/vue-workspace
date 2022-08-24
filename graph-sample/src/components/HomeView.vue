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

  <line-view class="m-10" :chartData="chartData"></line-view>

  <!-- for debug -->
  <!-- <div class="m-10">parent: {{ chartData }}</div> -->
  <input-view class="m-10" v-model="chartData"></input-view>
</template>

<script>
import LineView from "./LineView.vue";
import InputView from "./InputView.vue";

export default {
  name: "HomeView",
  components: {
    LineView,
    InputView,
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          { label: "Data 1", backgroundColor: "#ff0000", data: [40, 20, 12], borderColor: '#ff0000', borderWidth: 1 },
          { label: "Data 2", backgroundColor: "#00ff00", data: [30, 30, 18], borderColor: '#00ff00', borderWidth: 1 },
          { label: "Data 3", backgroundColor: "#0000ff", data: [50, 40, 24], borderColor: '#0000ff', borderWidth: 1 },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>

<style></style>
