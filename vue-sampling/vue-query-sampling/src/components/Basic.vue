<script setup>
import Posts from "./basic/Posts.vue";
import Post from "./basic/Post.vue";
import { ref } from "vue";

const visitedPosts = ref(new Set());
const isVisited = (id) => visitedPosts.value.has(id);

const postId = ref(-1);
const setPostId = (id) => {
  visitedPosts.value.add(id);
  postId.value = id;
}
</script>

<template>
  <Post v-if="postId > -1" :postId="postId" @setPostId="setPostId" />
  <Posts v-else :isVisited="isVisited" @setPostId="setPostId" />
</template>

<style scoped></style>
