import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    // state
    state: () => {
        return {
            count: 0,
            name: 'simjh'
        }
    },

    // getters
    getters: {
        doubleCount: (state) => state.count * 2,
    },

    // actions
    actions: {
        increment() {
            this.count++;
        },
        changeName(newValue) {
            this.name = newValue;
        }
    }
});