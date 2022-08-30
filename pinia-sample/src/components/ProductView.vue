<template>
    <h2>ProductView</h2>
  <div :v-if="product !== null" v-for="(product, idx) in products" :key="idx">
    <div>
      {{ product.name }}
    </div>
    <div>
      {{ product.image }}
    </div>
    <div>
      {{ product.price }}
    </div>
    <hr />
  </div>
  <button @click="fillData">Data Fill</button>
</template>

<script>
import { storeToRefs } from "pinia";
import { useProductStore } from "@stores/ProductStore";

export default {
  setup() {
    const store = useProductStore();
    const { products } = storeToRefs(store);
    return {
      store,
      products,
    };
  },
  methods: {
    fillData() {
      this.store.fill();
    },
  },
};
</script>

<style></style>
