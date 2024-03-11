<template>
  <a href="https://vuejs.org/api/sfc-script-setup">vuejs.org/script-setup</a>
  <div class="border">
    <h1>커스텀 디렉티브 사용</h1>
    <img src="./assets/directive.png" width="300" height="300" />
    <div v-custom-directive>123</div>
  </div>
  <div class="border">
    <h1>defineModel()</h1>
    <a
      href="https://velog.io/@ducks1077/defineModel%EC%9D%84-%ED%8C%8C%ED%97%A4%EC%B9%98%EB%8B%A4"
      >references article</a
    >
    <div class="child-border">
      <h3>이전 방식</h3>
      <old-child v-model="oldModelValue" />
      <div>oldModelValue: {{ oldModelValue }}</div>
    </div>
    <div class="child-border">
      <h3>새로운 방식</h3>
      <new-child v-model="newModelValue" />
      <div>newModelValue: {{ newModelValue }}</div>
    </div>
  </div>
  <div class="border">
    <h1>defineExpose()</h1>
    <div class="child-border">
      <expose-child ref="exposeRef" />
    </div>
    <div class="child-border">
      <div v-if="exposeRef">parent count: {{ exposeRef.count }}</div>
      <button @click="checkExposeData">parent check expose data</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import OldChild from "./components/OldChild.vue";
import NewChild from "./components/NewChild.vue";
import ExposeChild from "./components/ExposeChild.vue";
const vCustomDirective = {
  beforeMount: (el: HTMLDivElement) => {
    console.log("beforeMount", el.innerHTML);
    el.innerHTML = "321";
  },
};

const oldModelValue = ref<string>("");
const newModelValue = ref<string>("");

const exposeRef = ref<{
  count: number;
  plus: () => void;
}>();

const checkExposeData = () => {
  console.log(exposeRef.value.count);
  exposeRef.value.plus();
};
</script>

<style scoped>
.border {
  border: solid 1px black;
  margin: 5px 0;
}

.child-border {
  border: solid 1px grey;
  margin: 5px;
}
</style>
