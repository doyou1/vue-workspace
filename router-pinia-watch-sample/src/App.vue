<template>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <div>
    App count: {{ count }}
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useCounterStore } from "./store";

export default {
  setup() {
    const store = useCounterStore();
    const { count } = storeToRefs(store);    

    return {
      store, count
    };
  },
}
</script>


<style>
</style>
