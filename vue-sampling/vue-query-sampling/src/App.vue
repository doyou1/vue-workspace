<script setup>
import Simple from "./components/Simple.vue";
import Basic from "./components/Basic.vue";
import { ref } from "vue";
const selectedTabName = ref("simple");
</script>

<template>
  <el-tabs v-model="selectedTabName" class="tabs">
    <el-tab-pane label="Simple" name="simple" :lazy="true">
      <Simple />
    </el-tab-pane>
    <el-tab-pane label="Basic" name="basic" :lazy="true">
      <Basic />
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped></style>
