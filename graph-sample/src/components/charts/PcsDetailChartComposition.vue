<script setup>
import { ref,  watchEffect } from "vue";
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

let delayed = false;

const chartData = ref({
  datasets: [
    // PCS-001 交流電力量（kWh）
    {
      label: "PCS-001 交流電力量（kWh）",
      pointStyle: "rect",
      backgroundColor: "#FFFF00",
      data: [],
    },
    // 2022年9月3日9:00 予測断面(kWh)
    {
      label: "2022年9月3日9:00 予測断面(kWh)",
      type: "line",
      tension: 0.4,
      borderColor: "#FFFFFF",
      borderWidth: 1,
      borderDash: [10, 2], // 선과 빈공간 비율
      pointStyle: "dash",
      data: [],
    },
    // 2022年9月3日18:00 予測断面(kWh)
    {
      label: "2022年9月3日18:00 予測断面(kWh)",
      type: "line",
      tension: 0.4,
      borderColor: "#FF0000",
      borderWidth: 1,
      borderDash: [10, 2], // 선과 빈공간 비율
      pointStyle: "dash",
      data: [],
      yAxisID: "rightSide",
    },
  ],
  labels: [],
});
const chartOptions = ref({
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default" && !delayed) {
        delay = 500;
      }
      return delay;
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        title: function (tooltipItem) {
          // 정각이 아니면, 30분이면
          if ((tooltipItem[0].dataIndex / 2) % 1 !== 0) {
            return `${Math.floor(tooltipItem[0].dataIndex / 2)}:30`;
          } else {
            return `${tooltipItem[0].label}:00`;
          }
        },
        labelPointStyle: function () {
          return {
            pointStyle: "triangle",
            rotation: 0,
          };
        },
      },
    },
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {},
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        text: "left title",
        display: true,
        color: "white",
        font: {
          size: 16,
        },
      },
    },
    rightSide: {
      beginAtZero: true,
      position: "right",
      title: {
        text: "right title",
        display: true,
        color: "white",
        font: {
          size: 16,
        },
      },
    },
  },
});

const chart = ref(null);

const updateChart = () => {
  // 0 ~ 23.5
  // this.chartData.labels
  const labels = [];
  for (let i = 0; i < 24; i++) {
    labels.push(`${i}`);
    labels.push("");
  }
  chartData.value.labels = labels;

  // chartData.datasets

  // PCS-001 交流電力量（kWh）
  // chartData.datasets[0]
  const randomArr0 = [];
  for (let i = 0; i < labels.length; i++) {
    randomArr0.push(Math.floor(Math.random() * labels.length));
  }
  chartData.value.datasets[0].data = randomArr0;

  // 2022年9月3日9:00 予測断面(kWh)
  // chartData.datasets[1]
  const randomArr1 = [];
  for (let i = 0; i < labels.length; i++) {
    randomArr1.push(Math.floor(Math.random() * labels.length));
  }
  chartData.value.datasets[1].data = randomArr1;

  // 2022年9月3日18:00 予測断面(kWh)
  const randomArr2 = [];
  for (let i = 0; i < labels.length; i++) {
    randomArr2.push(Math.floor(Math.random() * labels.length));
  }
  chartData.value.datasets[2].data = randomArr2;

  if(chart.value) {
    console.log(chart.value.chart);
    chart.value.chart.update();
  }
};

watchEffect(() => {
  try {
    updateChart();
  } catch (error) {
    console.log(`pcsDetailChartComposition ${error}`);
  }
});
</script>

<template>
  <div class="relative">
    <Bar
      ref="chart"
      class="z-0 w-full h-full"
      :chart-data="chartData"
      :chart-options="chartOptions"
    />
    <button @click="updateChart">update chart</button>
  </div>
</template>

<style></style>
