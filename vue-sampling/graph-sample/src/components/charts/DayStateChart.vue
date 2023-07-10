<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
  />
</template>

<script>
// import { Line } from "vue-chartjs";
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

export default {
  components: {
    Bar,
  },
  data() {
    return {
      chartData: {
        datasets: [
          // PV交流電力量(kWh)
          {
            label: "PV交流電力量(kWh)",
            pointStyle: "rect",
            backgroundColor: "#FFFF00",
            data: [],
          },
          // 売電電力量(kWh)
          {
            label: "売電電力量(kWh)",
            pointStyle: "rect",
            backgroundColor: "#00FF00",

            data: [],
          },
          // 購入電力量(kWh)
          {
            label: "購入電力量(kWh)",
            pointStyle: "rect",
            backgroundColor: "#FF00FF",

            data: [],
          },
          // 斜面日射量(kWh/m2)
          {
            label: "斜面日射量(kWh/m2)",
            pointStyle: "rect",
            type: "line",
            fill: "start",
            tension: 0.4,
            backgroundColor: "#4F4D1F99",
            borderColor: "#FFFFFF66",
            borderWidth: 2,
            data: [],
          },
          {
            label: "予測断面",
            type: "line",
            tension: 0.4,
            borderColor: "#FFFFFF",
            borderWidth: 1,
            borderDash: [10, 2], // 선과 빈공간 비율
            pointStyle: "dash",
            data: [],
          },
        ],
        labels: [],
      },
      chartOptions: {
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
            },
          },
          legend: {
            // position: "chartArea",
            position: "top",
            align: "end",
            labels: {
              usePointStyle: true,
              // padding: 10
            },
          },
        },
      },
    };
  },
  mounted() {
    this.updateChart();
  },
  methods: {
    updateChart() {
      // 0 ~ 23.5
      // this.chartData.labels
      const labels = [];
      for (let i = 0; i < 24; i++) {
        labels.push(`${i}`);
        labels.push("");
      }
      this.chartData.labels = labels;

      // this.chartData.datasets

      // PV交流電力量(kWh)
      // this.chartData.datasets[0]
      const randomArr0 = [];
      for (let i = 0; i < labels.length; i++) {
        randomArr0.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[0].data = randomArr0;

      // 売電電力量(kWh)
      // this.chartData.datasets[1]
      const randomArr1 = [];
      for (let i = 0; i < labels.length; i++) {
        randomArr1.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[1].data = randomArr1;

      // 購入電力量(kWh)
      // this.chartData.datasets[2]
      const randomArr2 = [];
      for (let i = 0; i < labels.length; i++) {
        randomArr2.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[2].data = randomArr2;

      // 斜面日射量(kWh/m2)
      // this.chartData.datasets[3]
      const randomArr3 = [];
      for (let i = 0; i < labels.length; i++) {
        randomArr3.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[3].data = randomArr3;

      // 予測断面
      // this.chartData.datasets[3]
      const randomArr4 = [];
      for (let i = 0; i < labels.length; i++) {
        randomArr4.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[4].data = randomArr4;
    },
  },
};
</script>

<style></style>
