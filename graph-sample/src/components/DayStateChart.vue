<template>
  <Bar :chart-options="chartOptions" :chart-data="chartData" :plugins="plugins" />
  <!-- time: {{ monitors[0].time }}
   solar: {{ monitors[0].solar }}
   generated_energy: {{ monitors[0].generated_energy }}
   perchased_energy: {{ monitors[0].perchased_energy }}
   accumulated_energy: {{ monitors[0].accumulated_energy }}
   consumption_energy: {{ monitors[0].consumption_energy }}
   selected_prediction_energy: {{ monitors[0].selected_prediction_energy }} -->

   <button class="align-center text-lg text-white border-2 pointer-cursor" @click="updateChart">Update DayStateChart</button>
</template>

<script>
// import { Line } from "vue-chartjs";
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Filler,
  BarElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Filler,
  BarElement,
);

export default {
  components: {
    Bar,
  },
  data() {
    return {
      chartData: {
        labels: [
          "0",
          "",
          "1",
          "",
          "2",
          "",
          "3",
          "",
          "4",
          "",
          "5",
          "",
          "6",
          "",
          "7",
          "",
          "8",
          "",
          "9",
          "",
          "10",
          "",
          "11",
          "",
          "12",
          "",
          "13",
          "",
          "14",
          "",
          "15",
          "",
          "16",
          "",
          "17",
          "",
          "18",
          "",
          "19",
          "",
          "20",
          "",
          "21",
          "",
          "22",
          "",
          "23",
          "",
        ],
        datasets: [
          // PV交流電力量(kWh)
          {
            label: "PV交流電力量(kWh)",
            pointStyle: "rect",
            backgroundColor: "#FFFF00",
            data: [
            ],
          },
          // 売電電力量(kWh)
          {
            label: "売電電力量(kWh)",
            pointStyle: "rect",
            backgroundColor: "#00FF00",

            data: [
            ],
          },
          // 購入電力量(kWh)
          {
            label: "購入電力量(kWh)",
            pointStyle: "rect",
            backgroundColor: "#FF00FF",

            data: [
            ],
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
            data: [
            ],
          },
          {
            label: "予測断面",
            type: "line",
            tension: 0.4,
            borderColor: "#FFFFFF",
            borderWidth: 1,
            borderDash: [10, 2],  // 선과 빈공간 비율
            pointStyle: "dash",
            data: [
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
        },
        scales: {
        },
        plugins: {
          tooltip: {
            enabled: true,
            callbacks: {
              title: function(tooltipItem) {
                // 정각이 아니면, 30분이면
                if((tooltipItem[0].dataIndex / 2) % 1 !== 0) {
                  return `${Math.floor(tooltipItem[0].dataIndex / 2)}:30`;
                } else {
                  return `${tooltipItem[0].label}:00`;
                }

              }
            }
          },
          legend: {
            // position: "chartArea",
            position: "top",
            align: "end",
            labels: {
              usePointStyle: true,
              // padding: 10
            }
          },
        },
      },
      monitors: [
        {
          time: 0,
          solar: 501.25,
          generated_energy: 111.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 0.5,
          solar: 501.25,
          generated_energy: 112.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 1,
          solar: 501.25,
          generated_energy: 113.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 1.5,
          solar: 501.25,
          generated_energy: 114.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 2.0,
          solar: 501.25,
          generated_energy: 115.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 2.5,
          solar: 501.25,
          generated_energy: 116.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 3,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 3.5,
          solar: 501.25,
          generated_energy: 118.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 4,
          solar: 501.25,
          generated_energy: 119.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 4.5,
          solar: 501.25,
          generated_energy: 111.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 5,
          solar: 501.25,
          generated_energy: 117.151,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 5.5,
          solar: 501.25,
          generated_energy: 117.153,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 6,
          solar: 501.25,
          generated_energy: 117.155,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 6.5,
          solar: 501.25,
          generated_energy: 117.157,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 7,
          solar: 501.25,
          generated_energy: 117.159,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 7.5,
          solar: 501.25,
          generated_energy: 117.151,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 8,
          solar: 501.25,
          generated_energy: 117.111,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 8.5,
          solar: 501.25,
          generated_energy: 117.1,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 9,
          solar: 501.25,
          generated_energy: 117.12,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 9.5,
          solar: 501.25,
          generated_energy: 117.123,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 10,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 10.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 11,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 11.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 12,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 12.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 13,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 13.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 14,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 14.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 15,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 15.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 16,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 16.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 17,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 17.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 18,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 18.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 19,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 19.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 20,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 20.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 21,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 21.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 22,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 22.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 23,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
        {
          time: 23.5,
          solar: 501.25,
          generated_energy: 117.152,
          perchased_energy: 0,
          accumulated_energy: 117.152,
          consumption_energy: 0,
          selected_prediction_energy: 115.0,
        },
      ],
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
      const randomArr0 = []
      for (let i = 0; i < labels.length; i++) {
        randomArr0.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[0].data = randomArr0;

      // 売電電力量(kWh)
      // this.chartData.datasets[1]
      const randomArr1 = []
      for (let i = 0; i < labels.length; i++) {
        randomArr1.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[1].data = randomArr1;


      // 購入電力量(kWh)
      // this.chartData.datasets[2]
      const randomArr2 = []
      for (let i = 0; i < labels.length; i++) {
        randomArr2.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[2].data = randomArr2;

      // 斜面日射量(kWh/m2)
      // this.chartData.datasets[3]
      const randomArr3 = []
      for (let i = 0; i < labels.length; i++) {
        randomArr3.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[3].data = randomArr3;

      // 予測断面
      // this.chartData.datasets[3]
      const randomArr4 = []
      for (let i = 0; i < labels.length; i++) {
        randomArr4.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[4].data = randomArr4;

    }
  }
};
</script>

<style>
</style>
