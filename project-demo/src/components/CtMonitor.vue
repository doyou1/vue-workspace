<template>
  <div class="flex flex-col h-full text-black">
    <div class="flex justify-between w-full h-20 mb-4">
      <label-view class="item-center text-3xl mx-2" :text="name" />
      <alert-view class="text-2xl text-red-500 mx-2" :status="status" />
      <clock-view class="mx-14" />
    </div>
    <div class="flex justify-evenly w-full h-1/3 gap-3 pb-4">
      <moment-state-view
        class="shadow-xl rounded-lg w-1/4 h-full bg-gray-800"
      />
      <div class="flex flex-col w-1/2 h-full">
        <summary-view
          class="shadow-xl rounded-lg w-full h-1/2 mx-2 mb-2 bg-gray-800"
        />
        <div class="flex w-full h-1/2 mx-2">
          <perchased-state-view
            class="shadow-xl rounded-lg w-1/2 h-full mr-1 bg-gray-800"
          />
          <comsumption-state-view
            class="shadow-xl rounded-lg w-1/2 h-full ml-1 bg-gray-800"
          />
        </div>
      </div>
      <calendar-view class="w-1/4 h-full" />
    </div>
    <day-state-view class="shadow-xl rounded-lg h-2/3 bg-gray-800" />
  </div>
</template>

<script>
import { LabelView } from "@components";
import {
  AlertView,
  ClockView,
  MomentStateView,
  SummaryView,
  PerchasedStateView,
  ComsumptionStateView,
  CalendarView,
  DayStateView,
} from "@partials/ctMonitor";

// import LabelView from "@components/LabelView";
// import AlertView from "@partials/ctMonitor/AlertView";
// import ClockView from "@partials/ctMonitor/ClockView";
// import MomentStateView from "@partials/ctMonitor/MomentStateView";
// import SummaryView from "@partials/ctMonitor/SummaryView";
// import PerchasedStateView from "@partials/ctMonitor/PerchasedStateView";
// import ComsumptionStateView from "@partials/ctMonitor/ComsumptionStateView";
// import CalendarView from "@partials/ctMonitor/CalendarView";
// import DayStateView from "@partials/ctMonitor/DayStateView";

export default {
  components: {
    LabelView,
    AlertView,
    ClockView,
    MomentStateView,
    SummaryView,
    PerchasedStateView,
    ComsumptionStateView,
    CalendarView,
    DayStateView,
  },
  data() {
    return {
      name: "Shimomasuda Solar",
      status: "status",
    };
  },
};
</script>

<style></style>
