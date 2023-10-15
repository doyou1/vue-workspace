<script setup>
import { reactive, ref } from "vue";

const refCount = ref(0);
const reactiveCount = reactive(0);

const refObject = ref({ title: "refObject", isDone: false });
const reactiveObject = reactive({ title: "reactiveObject", isDone: false });

const refArr = ref([]);
const reactiveArr = reactive([]);

const refCountUp = () => {
  refCount.value++;
};

// Not Working...
const reactiveCountUp = () => {
  reactiveCount++;
};

const handleRefObject = () => {
  refObject.value.isDone = !refObject.value.isDone;
};

const handleReactiveObject = () => {
  reactiveObject.isDone = !reactiveObject.isDone;
};

const addRefArr = () => {
  refArr.value.push("🔥");
};

const removeRefArr = () => {
  refArr.value.pop();
};

const addReactiveArr = () => {
  reactiveArr.push("🔥");
};

const removeReactiveArr = () => {
  reactiveArr.pop();
};
</script>

<template>
  <div>refCount: {{ refCount }}</div>
  <button @click="refCountUp">refCountUp!!!</button>

  <div>reactiveCount: {{ reactiveCount }}</div>
  <button @click="reactiveCountUp">reactiveCountUp!!!</button>


  <div>refObject title: {{ refObject.title }}</div>
  <div>refObject isDone: {{ refObject.isDone }}</div>
  <button @click="handleRefObject">handleRefObject!!!</button>

  <div>reactiveObject title: {{ reactiveObject.title }}</div>
  <div>reactiveObject isDone: {{ reactiveObject.isDone }}</div>
  <button @click="handleReactiveObject">handleReactiveObject!!!</button>


  <div>RefArr</div>
  <ul>
    <li v-for="item in refArr" v-bind:key="item">
      {{ item }}
    </li>
  </ul>
  <button @click="addRefArr">아이템추가</button>
  <button @click="removeRefArr">아이템삭제</button>

  <div>ReactiveArr</div>
  <ul>
    <li v-for="item in reactiveArr" v-bind:key="item">
      {{ item }}
    </li>
  </ul>
  <button @click="addReactiveArr">아이템추가</button>
  <button @click="removeReactiveArr">아이템삭제</button>
</template>

<style scoped></style>
