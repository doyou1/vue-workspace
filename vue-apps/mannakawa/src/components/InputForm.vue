<script setup>
import { ref } from "vue";
const fromInput = ref("中野駅");
const toInput = ref("武蔵小杉駅");

const emit = defineEmits(['toggleIsSearched']);
defineProps({
  isSearched: Boolean
})
</script>

<template>
  <div class="flex">
    <el-input class="m-1" v-model="fromInput" placeholder="僕の最寄り駅" clearable autofocus="true"/>
    <el-input class="m-1" v-model="toInput" placeholder="相手の最寄り駅" clearable />
    <el-button class="m-1" type="primary" round text bg :disabled="isSearched" @click="emit('toggleIsSearched')">Search</el-button>
  </div>
</template>

<style scoped>
</style>
