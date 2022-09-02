<template>
  <div>{{ data.test }}</div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      data: Object,
    };
  },
  mounted() {
    // axios.defaults.baseURL = "http://127.0.0.1:7777";
    // axios.get().then((response) => {
    //   console.log(response.data);
    //   console.log(response.status);
    //   this.response = response;
    // });

    // 최초 접근때도 updated를 강제 호출하는 코드
    // this.response = "API는 무조건 updated";

    // axios.defaults.headers.common['content-type'] = 'application/json';
    // // axios.get("./api/index.js").then((response) => {
    // axios.get("./sample.json").then((response) => {
    //   console.log(response);
    //   this.data = response.data;
    // })

    axios.defaults.headers.common['content-type'] = 'application/json';
    axios.get('http://133.18.196.215:8000/api/power/summary').then((response) => {
      console.log(response);
    });
  },
  updated() {
    // console.log("updated");
  }
};
</script>

<style></style>