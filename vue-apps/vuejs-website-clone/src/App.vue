<template>
  <HomeView msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HomeView from './components/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView
  },
  created() {
    document.title = "Vue.js - The Progressive JavaScript Framework | Vue.js";
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
