<template>
  <div class="container">
    <input-view @update:input-value="handleUpdateInputValue" />
    meInputValue: {{ meInputValue }} youInputValue: {{ youInputValue }}
  </div>
</template>

<script setup lang="ts">
import InputView from "@/components/InputView.vue";
import { SearchInput } from "@/composables/use-station-search";
import { ref } from "vue";

const meInputValue = ref<SearchInput>();
const youInputValue = ref<SearchInput>();

const handleUpdateInputValue = (me: SearchInput, you: SearchInput) => {
  meInputValue.value = me;
  youInputValue.value = you;
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  height: calc(100vh - 2rem);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
