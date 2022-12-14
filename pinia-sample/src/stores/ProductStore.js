import { defineStore } from "pinia";
import products from "@data/products.json";

export const useProductStore = defineStore("ProductStore", {
    // state
    state: () => {
        return {
            products: [],
        }
    },
    // actions
    actions: {
        fill() {
            this.products = products;
        }
    }
    // getters
});