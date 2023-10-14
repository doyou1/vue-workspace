<script setup>
import { ref } from "vue";
const fromInput = ref("中野駅");
const toInput = ref("武蔵小杉駅");

</script>

<template>
  <div>
    <img class="w-full h-full my-3" src="../assets/search-result.png"/>
    <ul class="text-left my-3">
      <li>
        <el-text class="mx-1" type="danger" size="large" tag="b">＜湘南新宿ライン快速(平塚行)＞</el-text>
      </li>
      <li>
        <el-text class="mx-1" type="primary" size="large" tag="b">中野</el-text>
      </li>
      <li>
        <el-text class="mx-1">新宿</el-text>
      </li>
      <li>
        <el-text class="mx-1" tag="b">渋谷 ←真ん中(中野から10分、武蔵小杉から15分)</el-text>
      </li>
      <li>
        <el-text class="mx-1" tag="b">恵比寿←真ん中(中野から15分、武蔵小杉から10分)</el-text>
      </li>
      <li>
        <el-text class="mx-1">大崎</el-text>
      </li>
      <li>
        <el-text class="mx-1" type="primary" size="large" tag="b">武蔵小杉</el-text>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
