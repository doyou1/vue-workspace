<script setup>
import { computed } from "vue";
import {
  LegendBarIcon,
  LegendAreaIcon,
  LegendDashIcon,
} from "../../../assets/icon/legendIcon";

const props = defineProps({
  style: String,
  fill: String,
});

const Icon = computed({
  get() {
    let icon = undefined;
    switch (props.style) {
      case "bar":
        icon = LegendBarIcon;
        icon.props.fill = props.fill;
        break;
      case "area":
        icon = LegendAreaIcon;
        icon.props.fill = props.fill;
        break;
      case "dash":
        icon = LegendDashIcon;
        icon.props.stroke = props.fill;
        break;
      default:
        break;
    }
    console.log(icon);
    if (!icon) return;

    return icon;
  },
});
</script>
<template>
  <Icon class="w-10 h-auto mx-1 items-center" />
</template>

<style></style>
