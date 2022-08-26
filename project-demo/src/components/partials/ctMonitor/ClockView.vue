<template>
  <div :class="propClass">
    <div className="flex justify-center items-center">
      <WeatherIcon code="{weather}" />
      <div className="text-black">
        <label-view
          class="flex justify-center mx-3 text-base "
          :text="mmddyyyy"
        />
        <label-view
          class="flex justify-center mx-3 text-5xl"
          :text="hhmm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { LabelView } from "@components";

export default {
  data() {
    return {
      time: new Date(),
    }
  },
  methods: {
    getTime() {
      const interval = setInterval(() => {
        this.time = new Date();
      }, 1000 * 60);
      return () => clearInterval(interval);
    }
  },
  computed: {
    mmddyyyy() {
      
      return "mmddyyyy";
    },
    hhmm() {
      return "hhmm";
    }
  },
  mounted() {
    this.getTime()
  },
  props: {
    propClass: String,
  },
  components: {
    LabelView
  }
};
</script>

<style></style>
