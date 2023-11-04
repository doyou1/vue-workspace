<script setup>
import { useQuery } from "vue-query";

const fetcher = async () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos").then(
        (response) => resolve(response.json())
      );
    }, 1000);
  });
};
const { isLoading, isError, isFetching, data, error, refetch } = useQuery(
  "todos",
  fetcher
);
</script>

<template>
  <p>
    Turn on <strong>network throttling</strong> in dev-tools and press Refetch
  </p>
  <button @click="refetch" :disabled="isFetching">
    {{ isFetching ? "Refetching..." : "Refetch" }}
  </button>
  <h2>TODO list</h2>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data">
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.completed ? "🗹" : "☐" }} {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>
