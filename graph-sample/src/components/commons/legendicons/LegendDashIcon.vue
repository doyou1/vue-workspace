<template>
  <svg
    width="70"
    height="1"
    viewBox="0 0 70 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="0.5" x2="70" y2="0.5" :stroke="stroke" stroke-dasharray="12 12" />
  </svg>
</template>

<script>
export default {
  props: {
    stroke: String,
  },
};
</script>

<style></style>
