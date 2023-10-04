<template>
  <div id="app" class="content mx-auto py-6">
    <div class="title">Coffee Plans</div>
    <div class="subText">We travel the world to source the very best single origin coffee for you</div>
    <PlanPicker />
  </div>
</template>

<script setup>
import PlanPicker from './components/PlanPicker.vue';
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 1.5em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
.subText {
  font-size: 1.5em;
  margin-left: 0;
  margin-right: 0;
  color: gray;
}

</style>
