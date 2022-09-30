<template>
  <div class="relative">
    <ChartLegend
      class="absolute w-auto z-10 top-0 right-0 m-1 border-2 border-white text-white"
      :chartData="chartData"
    />
    <Bar
      ref="chart"
      class="z-0 w-full h-full"
      :chart-data="chartData"
      :chart-options="chartOptions"
      :plugins="plugins"
    />
    <button @click="updateChart">
      update chart
    </button>
  </div>
</template>

<script>
// import { Line } from "vue-chartjs";
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, registerables } from "chart.js";
import ChartLegend from "../commons/ChartLegend.vue";

ChartJS.register(...registerables);

let delayed = false;

export default {
  components: {
    Bar,
    ChartLegend,
  },
  data() {
    return {
      chartData: {
        datasets: [
          // PCS-001 交流電力量（kWh）
          {
            label: "PCS-001 交流電力量（kWh）",
            pointStyle: "rect",
            backgroundColor: "#FFFF00",
            data: [],
            legendStyle: "bar",
            legendColor: "#FFFF00",
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
            legendStyle: "area",
            legendColor: "#FFFFFF",

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
            legendStyle: "dash",
            legendColor: "#FF0000",

            data: [],
            yAxisID: 'rightSide',
          },
        ],
        labels: [],
      },
      chartOptions: {
        animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
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
                                  labelPointStyle: function() {
                        return {
                            pointStyle: 'triangle',
                            rotation: 0
                        };
                    }
            },
          },
          legend: {
            display: false,
          },
        },
        layout: {
          padding: {
          },
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
          }
        },
      },
      plugins: [
        // {
        //   id: "rightSideTitle",
        //   afterDatasetsDraw(chart) {
        //     // console.log(args);
        //     // console.log(pluginsOptions);
        //     const {
        //       ctx,
        //       chartArea: {
        //         left,
        //         // right,
        //         top,
        //         // bottom,
        //         width,
        //         height,
        //       },
        //     } = chart;

        //     console.log(chart.scales.y);

        //     ctx.save();

        //     const angle = Math.PI / 180;
        //     ctx.translate(0, 0);
        //     ctx.rotate(270 * angle);
        //     ctx.font = "16px";
        //     ctx.fillStyle = "#FFFFFF";

        //     const y = height / -2 - top - 20;
        //     const x = width + left + 20;
        //     ctx.fillText("kWh/m2", y, x);
        //     ctx.restore();
        //   },
        // },
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

      // PCS-001 交流電力量（kWh）
      // this.chartData.datasets[0]
      const randomArr0 = [];
      for (let i = 0; i < labels.length; i++) {
        randomArr0.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[0].data = randomArr0;

      // 2022年9月3日9:00 予測断面(kWh)
      // this.chartData.datasets[1]
      const randomArr1 = [];
      for (let i = 0; i < labels.length; i++) {
        randomArr1.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[1].data = randomArr1;

      // 2022年9月3日18:00 予測断面(kWh)
      const randomArr2 = [];
      for (let i = 0; i < labels.length; i++) {
        randomArr2.push(Math.floor(Math.random() * labels.length));
      }
      this.chartData.datasets[2].data = randomArr2;

      console.log(this.$refs.chart.updateChart());
    },
  },
};
</script>

<style></style>
