import { h } from 'vue'
const LegendIcon = h(
    'svg', {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 70 10", stroke:"currentColor"},
    [
        h('rect', {width: "70", height: "10", fill: "#D9D9D9"})
    ]
)

export {
    LegendIcon,
}