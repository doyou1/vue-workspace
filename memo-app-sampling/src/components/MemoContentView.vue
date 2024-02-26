<template>
  <div ref="contentContainerRef" class="content-view" :style="innerStyle">
    <memo-content-item v-for="(item, index) in contents" :key="`${item.id}_${index}`" :content="item" />
  </div>
</template>

<script lang="ts">
export default {
  name: "MemoContentView",
};
</script>

<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import { DataModelContent, memoContentItemHeight, memoContentItemGap } from "@/composables/use-form-data";
import MemoContentItem from "@/components/content/MemoContentItem.vue";

defineProps<{
  contents: DataModelContent[];
}>();

const contentContainerRef = ref<HTMLDivElement>();

const innerStyle = computed(() => {
  const containerHeight = contentContainerRef.value?.offsetHeight ?? 0;
  /** containerHeight > x * memoContentItemHeight + (x + 1) * memoContentItemGap */
  // (containerHeight - memoContentItemGap) / (memoContentItemHeight + memoContentItemGap) > x 
  // 최소 1
  const row = Math.max(Math.floor((containerHeight - memoContentItemGap) / (memoContentItemHeight + memoContentItemGap)), 1);
  return {
    "--memo-content-item-height": `${memoContentItemHeight}px`,
    "--memo-content-item-gap": `${memoContentItemGap}px`,
    "--memo-content-item-row": row,
  }
});
</script>

<style scoped>
.content-view {
  flex: 1;
  display: grid;
  padding: var(--number-8);
  gap: var(--memo-content-item-gap);
  grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(var(--memo-content-item-row), minmax(var(--memo-content-item-height), auto));
}
</style>
