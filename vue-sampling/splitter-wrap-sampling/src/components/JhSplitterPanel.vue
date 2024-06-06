<template>
  <SplitterPanel
    v-bind="props"
    :class="['splitter-panel', ...innerClass]"
    :style="innerStyle"
  >
    <slot></slot>
  </SplitterPanel>
</template>

<script setup lang="ts">
import { computed, defineProps, inject, onMounted, ref } from "vue";
import SplitterPanel, { SplitterPanelProps } from "primevue/splitterpanel";
import {
  SplitterInjectionKey,
  SplitterInjectionValue,
} from "../composables/use-splitter";

/**
 *　SplitterPanel인지를 name으로 판단
 * https://github.com/primefaces/primevue/blob/78b9416f066e41ac3e956966ec1dea42f6c33c21/components/lib/splitter/Splitter.vue#L83
 * */
defineOptions({
  name: "SplitterPanel",
});

const props = defineProps<SplitterPanelProps>();
const splitterPanel = inject<SplitterInjectionValue>(SplitterInjectionKey);
const currentPanelIndex = ref<number>(-1);
onMounted(() => {
  if (splitterPanel) {
    currentPanelIndex.value = splitterPanel.mountedPanelSize.value;
    splitterPanel.notifyMounted();
  }
});

const innerClass = computed<string[]>(() => {
  return [
    splitterPanel?.layout.value ?? "",
    currentPanelIndex.value === (splitterPanel?.mountedPanelSize.value ?? 0) - 1
      ? "is-last"
      : "",
  ];
});

const innerStyle = computed(() => ({
  "--border-size": `${splitterPanel?.gutterSize.value ?? 0}px`,
}));
</script>

<style scoped lang="scss">
.splitter-panel {
  display: flex;
  align-items: center;
  justify-content: center;

  &.horizontal:not(.is-last) {
    border-right: var(--border-size) solid gray;
  }

  &.vertical:not(.is-last) {
    border-bottom: var(--border-size) solid gray;
  }
}
</style>
