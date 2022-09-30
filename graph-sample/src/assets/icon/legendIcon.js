import { h } from "vue";

export const LegendBarIcon = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 35 10",
    width: "35",
    height: "10",
  },
  [h("rect", { width: "35", height: "10" })]
);
export const LegendAreaIcon = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 35 10",
    width: "35",
    height: "10",
  },
  [h("polygon", { points: "17.5 0 0 5 17.5 10 35 5" })]
);

export const LegendDashIcon = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 35 2",
    width: "35",
    height: "2",
  },
  [
    h("line", {
      y1: "0.5",
      x2: "35",
      y2: "0.5",
      "stroke-width": "2",
      "stroke-dasharray": "12 6",
    }),
  ]
);
