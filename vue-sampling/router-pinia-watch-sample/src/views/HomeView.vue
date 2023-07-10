<template>
  <button @click="pushQuery">push query</button>
  <button @click="plusCount">plus count</button>
  <div>homeview query: {{ text }}</div>

  <div>homeview count: {{ storeText }}</div>

  <div>HomeView count: {{ count }}</div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../store";
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useCounterStore();
    const { count } = storeToRefs(store);
    const route = useRoute();

    return {
      watchList: {store, count, route},
    };
  },
  data() {
    return {
      text: "String",
      storeText: "home Store Text",
    };
  },
  methods: {
    pushQuery() {
      console.log("pushQuery");
      if (Math.random() > 0.5) {
        this.$router.push({
          name: "home",
          query: { id: "id123", date: "123" },
        });
      } else {
        this.$router.push({
          name: "home",
          query: { id: "id321", date: "321" },
        });
      }
    },
    plusCount() {
      this.watchList.store.increment();
    },
  },
  watch: {
    // $route: {
    //   handler: function (route) {
    //     console.log("watch");
    //     console.log(route.query);

    //     if (Object.keys(route.query).length === 0) {
    //       this.text = "blank";
    //     } else {
    //       this.text = route.query;
    //     }
    //   },
    //   // 변경이 없을때도 최초 실행을 한다?
    //   immediate: true,
    // },
    // count: {
    //   handler: function (count, oldCount) {
    //     this.storeText = `HomeView count watching newValue: ${count}, oldValue: ${oldCount}`;
    //   },
    //   // 변경이 없을때도 최초 실행을 한다?
    //   immediate: true,
    // },
    watchList: {
      handler: function(newValue, oldValue) {
        console.log(newValue);
        console.log(`newValue: ${newValue}, oldValue: ${oldValue}`);
      },
      immediate: true,
      deep: true,
    }
  },
};
</script>
