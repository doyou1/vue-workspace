<template>
  <div class="container">
    <input-view ref="inputRef" @update:input-value="handleUpdateInputValue" />
    <map-view
      :me="meInputValue"
      :you="youInputValue"
      :input-view-width="inputViewWidth"
    />
  </div>
</template>

<script setup lang="ts">
import InputView from "@/components/InputView.vue";
import MapView from "@/components/MapView.vue";
import { SearchInput } from "@/composables/use-station-search";
import { ref, onMounted } from "vue";

const meInputValue = ref<SearchInput>();
const youInputValue = ref<SearchInput>();
const inputRef = ref<InstanceType<typeof InputView>>();
const inputViewWidth = ref<number>(0);
const handleUpdateInputValue = (me: SearchInput, you: SearchInput) => {
  meInputValue.value = me;
  youInputValue.value = you;
};

onMounted(() => {
  const { width } = (
    inputRef.value?.$el as HTMLElement
  ).getBoundingClientRect();
  inputViewWidth.value = width;
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  height: calc(100vh - 2rem);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 24px;
}
</style>
