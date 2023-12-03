<template>
  <div class="container">
    <div class="input">
      <el-autocomplete
        v-model="meValue.inputValue"
        size="large"
        :fetch-suggestions="
          (queryString, cb) => querySearch(queryString, cb, 'me')
        "
        :prefix-icon="Search"
        placeholder="駅名を入力してください"
        @select="handleSelect($event, 'me')"
      >
        <template #default="{ item }">
          {{ `${item.value.stationName} (${item.value.prefName})` }}
        </template>
      </el-autocomplete>
      <el-autocomplete
        v-model="youValue.inputValue"
        size="large"
        :fetch-suggestions="
          (queryString, cb) => querySearch(queryString, cb, 'you')
        "
        :prefix-icon="Search"
        placeholder="駅名を入力してください"
        @select="handleSelect($event, 'you')"
      >
        <template #default="{ item }">
          {{ `${item.value.stationName} (${item.value.prefName})` }}
        </template>
      </el-autocomplete>
    </div>
    meValue: {{ meValue }} youValue: {{ youValue }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElAutocomplete } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import {
  usePrefData,
  useStationSearch,
} from "@/composables/use-station-search";

const meValue = ref({
  inputValue: "",
  prefValue: "",
});

const youValue = ref({
  inputValue: "",
  prefValue: "",
});
const { prefData } = usePrefData();
const { querySearch, handleSelect } = useStationSearch(
  meValue,
  youValue,
  prefData,
);
</script>

<style scoped lang="scss">
.container {
  display: flex;
  height: calc(100vh - 2rem);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .input {
    display: flex; /*added*/
  }
}
</style>
