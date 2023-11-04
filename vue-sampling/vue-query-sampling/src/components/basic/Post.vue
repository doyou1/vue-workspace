<script setup>
import { useQuery } from "vue-query";

const props = defineProps({
  postId: {
    type: Number,
    required: true,
  },
});
const emits = defineEmits(["setPostId"]);

const fetcher = async (id) =>
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (response) => response.json()
  );

const { isLoading, isError, isFetching, data, error, refetch } = useQuery(
  ["post", props.postId],
  () => fetcher(props.postId)
);
</script>

<template>
  <h1>Post {{ postId }}</h1>
  <div>
    <a @click="$emit('setPostId', -1)" href="#"> Back </a>
  </div>
  <div>
    <a @click="refetch" :disabled="isFetching" href="#">
      {{ isFetching ? "Refetching..." : "Refetch" }}
    </a>
  </div>
  <div v-if="isLoading" class="update">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data">
    <h1>{{ data.title }}</h1>
    <div>
      <p>{{ data.body }}</p>
    </div>
    <div v-if="isFetching" class="update">Background Updating...</div>
  </div>
</template>

<style scoped></style>
