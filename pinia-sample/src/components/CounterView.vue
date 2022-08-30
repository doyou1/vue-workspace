<template>
  <h2>CounterView</h2>
  <div>count: {{ count }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <div>doubleValue: {{ doubleValue }}</div>
  <div>name: {{ name }}</div>
  <div>
    <button @click="increase">Count Increse</button>
  </div>
  <div>
    <input type="text" :value="name" @input="changeName" />
  </div>
  <hr />
</template>

<script>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@stores/CounterStore";

export default {
  setup() {
    const store = useCounterStore();
    const { count, name, doubleCount } = storeToRefs(store);

    // 그 자체는 주소값, reactive data change OK
    // const doubleValue = doubleCount;
    // .value는 데이터, reactive data change NG
    const doubleValue = doubleCount.value;
    return {
      store,

      count,
      name,
      // will also always be 0
      doubleCount,
      // ✅ this one will be reactive
      doubleValue,
    };
  },
  methods: {
    increase() {
      this.store.increment();
    },
    changeName(event) {
      this.store.changeName(event.target.value);
    },
  },
};
</script>

<style></style>
