<template>
  <Splitter ref="splitterRef" v-bind="props" class="splitter">
    <slot></slot>
  </Splitter>
</template>

<script setup lang="ts">
import { computed, defineProps, provide, withDefaults } from "vue";
import Splitter, { SplitterProps } from "primevue/splitter";
import { SplitterInjectionKey, useSplitterController } from "../composables/use-splitter";

const props = withDefaults(defineProps<SplitterProps>(), {
  layout: "horizontal",
  gutterSize: 1,
  unstyled: true,
});

const { mountedPanelSize, notifyMounted, splitterRef } = useSplitterController();

provide(SplitterInjectionKey, {
  layout: computed(() => props.layout),
  gutterSize: computed(() => props.gutterSize),
  mountedPanelSize,
  notifyMounted,
});
</script>

<style scoped lang="scss">
.splitter {
  height: 300px;
}
</style>
