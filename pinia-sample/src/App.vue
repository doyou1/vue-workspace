<template>
  <div v-for="(product, idx) in products" :key="idx">
    <div>
      {{product.name}}
    </div>
    <div>
      {{product.image}}
    </div>
    <div>
      {{product.price}}
    </div>
    <hr>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useProductStore } from "@stores/ProductStore";

export default {
  data() {
    return {
    };
  },
  setup() {
    const store = useProductStore();
    const { products } = storeToRefs(store);
    return {
      products,
    }
  }
};
</script>

<style></style>
