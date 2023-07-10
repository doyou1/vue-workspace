<template>
  <button @click="pushQuery">push query</button>

  {{ text }}
</template>

<script>
export default {
  data() {
    return {
      text: "String",
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
  },
  watch: {
    $route: {
      handler: function (route) {
        console.log("watch");
        console.log(route.query);

        if(Object.keys(route.query).length === 0) {
          this.text = "blank";
        } else {
          this.text = route.query;
        }
      },
      // 변경이 없을때도 최초 실행을 한다?
      immediate: true,
    },
  },
};
</script>
