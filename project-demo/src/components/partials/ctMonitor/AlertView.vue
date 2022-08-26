<template>
  <div class="propClass">
    <label-view class="alert_text" :text="status" />
  </div>
</template>

<script>
import { LabelView } from "@components";

export default {
  props: {
    propClass: String,
    status: String,
  },
  components: {
    LabelView,
  }
};
</script>

<style></style>
