<template>
  <div class="container">
    <div class="input">
      <el-input
        v-model="inputValue"
        class="w-50 m-2"
        size="large"
        :prefix-icon="Search"
        placeholder="駅名を入力してください"
      />
      <el-button round>検索</el-button>
    </div>
    <div class="result">
      isLoading: {{ isLoading }} isError: {{ isError }} resultData:
      {{ resultData }} error: {{ error }} isFetching: {{ isFetching }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElInput, ElButton } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import { useStationSearch } from "@/composables/use-station-search";

const inputValue = ref("");
const { isLoading, isError, resultData, error, isFetching } =
  useStationSearch(inputValue);
</script>

<style scoped lang="scss">
.container {
  display: flex;
  height: calc(100vh - 2rem);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .input {
    display: flex;
    align-items: center;
  }
}
</style>
