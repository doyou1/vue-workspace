<template>
  <ct-monitor/>
</template>

<script>
// import SummaryView from "./components/SummaryView.vue";
import CtMonitor from "./components/CtMonitor.vue";

export default {
  name: "App",
  components: {
    // SummaryView,
    CtMonitor,
  },
  data() {
    return {
      summaryData: {
        prePower: 0,
        prePick: 0,
        cmtPower: 0,
        cmtPick: 0,
        cyrPower: 0,
        cyrPick: 0,
      },
    };
  },
  methods: {
  },
};
</script>

<style></style>
