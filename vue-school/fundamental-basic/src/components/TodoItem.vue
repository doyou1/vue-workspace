<template>
  <div>
    <input type="checkbox" v-model="completed" />
    <span :class="{done: completed}">
      <slot ></slot>
    </span>
    <slot name="description"></slot>
    <button><slot name="button-text"></slot></button>
  </div>
</template>

<script setup>
import { ref } from "vue";


const completed = ref(true);

</script>

<style>
.done {
  color: green;
  text-decoration: line-through;
}

</style>