<template>
  <div class="input">
    <el-autocomplete
      v-model="innerMeValue.inputValue"
      size="large"
      :fetch-suggestions="
        (queryString, cb) => querySearch(queryString, cb, 'me')
      "
      :prefix-icon="Search"
      placeholder="駅名を入力してください"
      @select="handleSelect($event as AutocompleteItem, 'me')"
    >
      <template #default="{ item }">
        {{ `${item.value.stationName} (${item.value.prefName})` }}
      </template>
    </el-autocomplete>
    <el-autocomplete
      v-model="innerYouValue.inputValue"
      size="large"
      :fetch-suggestions="
        (queryString, cb) => querySearch(queryString, cb, 'you')
      "
      :prefix-icon="Search"
      placeholder="駅名を入力してください"
      @select="handleSelect($event as AutocompleteItem, 'you')"
    >
      <template #default="{ item }">
        {{ `${item.value.stationName} (${item.value.prefName})` }}
      </template>
    </el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { ElAutocomplete } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import {
  usePrefData,
  useStationSearch,
  SearchInput,
  AutocompleteItem,
} from "@/composables/use-station-search";
const emits = defineEmits<{
  (e: "update:inputValue", me: SearchInput, you: SearchInput): void;
}>();

const innerMeValue = ref<SearchInput>({
  inputValue: "",
  prefValue: "",
  stationGroupCode: -1,
  stationPosition: {
    lat: -1,
    lng: -1,
  },
});

const innerYouValue = ref<SearchInput>({
  inputValue: "",
  prefValue: "",
  stationGroupCode: -1,
  stationPosition: {
    lat: -1,
    lng: -1,
  },
});
const { prefData } = usePrefData();
const { querySearch, handleSelect, meStationData, youStationData } =
  useStationSearch(innerMeValue, innerYouValue, prefData);

watch([innerMeValue, innerYouValue, meStationData, youStationData], () => {
  if (
    (innerMeValue.value.inputValue.length !== 0 &&
      innerMeValue.value.prefValue.length !== 0 &&
      meStationData.value !== undefined &&
      meStationData.value?.length > 0) ||
    (innerYouValue.value.inputValue.length !== 0 &&
      innerYouValue.value.prefValue.length !== 0 &&
      youStationData.value !== undefined &&
      youStationData.value?.length > 0)
  ) {
    meStationData.value?.map((v) => {
      if (v.station_g_cd === innerMeValue.value.stationGroupCode) {
        innerMeValue.value.stationPosition = {
          lat: v.lat,
          lng: v.lon,
        };
      }
    });

    youStationData.value?.map((v) => {
      if (v.station_g_cd === innerYouValue.value.stationGroupCode) {
        innerYouValue.value.stationPosition = {
          lat: v.lat,
          lng: v.lon,
        };
      }
    });
    emits("update:inputValue", innerMeValue.value, innerYouValue.value);
  }
});
</script>

<style scoped lang="scss">
.input {
  display: flex; /*added*/
}
</style>
