<template>
  <!-- about vue component concept -->
  <!-- <div id="app" class="content mx-auto py-6">
    <div class="title">Coffee Plans</div>
    <div class="subText">We travel the world to source the very best single origin coffee for you</div>
    <PlanPicker />
  </div> -->
  <!-- about vue slot -->
  <div>
    <h1>Vue.js Slots Fundamentals</h1>
    <TodoItem>
      Buy Banana
      <!-- <template v-slot:description> -->
      <template #description>
        <p>Bananas are good for your health.</p>
      </template>
      <template v-slot:button-text>
        Good
      </template>
    </TodoItem>

    <TodoItem>
      Eat Banana
      <template #description>
        <p>Bananas are good</p>
      </template>
    </TodoItem>

    <!-- page-layout with slot -->
    <page-layout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template #footer>
        <h1>Here's some contact info</h1>
      </template>
    </page-layout>
  </div>
</template>

<script setup>
import PlanPicker from './components/PlanPicker.vue';
import TodoItem from './components/TodoItem.vue';
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
