<template>
  <div ref="contentContainerRef" class="content-view" :style="innerStyle">
    <div class="table-head">
      <div class="left">
        <div>Word</div>
        <div>Meaning</div>
        <div></div>
      </div>
      <div class="right">
        <div>Word</div>
        <div>Meaning</div>
        <div></div>
      </div>
    </div>
    <div class="table-body">
      <memo-content-item
        v-for="(item, index) in contents"
        :key="`${item.id}_${index}`"
        :index="index"
        :content="item"
        @update:content="
          (index, key, value) => $emit('update:content', index, key, value)
        "
      />
      <!-- Plus -->
      <memo-content-item :content="undefined" @add:content="$emit('add:content')"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MemoContentView",
};
</script>

<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import {
  DataModelContent,
  memoContentItemHeight,
  memoContentItemGap,
  DataModelContentKeys,
  DataModelContentValues,
} from "@/composables/use-form-data";
import MemoContentItem from "@/components/content/MemoContentItem.vue";

defineProps<{
  contents: DataModelContent[];
}>();
defineEmits<{
  (
    e: "update:content",
    index: number,
    key: DataModelContentKeys,
    value: DataModelContentValues,
  ): void;
  (e: "add:content"): void;
}>();

const contentContainerRef = ref<HTMLDivElement>();

const innerStyle = computed(() => {
  const containerHeight = contentContainerRef.value?.offsetHeight ?? 0;
  /** containerHeight > x * memoContentItemHeight + (x + 1) * memoContentItemGap */
  // (containerHeight - memoContentItemGap) / (memoContentItemHeight + memoContentItemGap) > x
  // 최소 1
  const row = Math.max(
    Math.floor(
      (containerHeight - memoContentItemGap) /
        (memoContentItemHeight + memoContentItemGap),
    ),
    1,
  );
  return {
    "--memo-content-item-height": `${memoContentItemHeight}px`,
    "--memo-content-item-gap": `${memoContentItemGap}px`,
    "--memo-content-item-row": row,
  };
});
</script>

<style scoped>
.content-view {
  flex: 1;
  display: flex;
  flex-direction: column;

  .table-head {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: var(--number-8);
    border-bottom: 1px solid var(--color-gray-100);

    .left,
    .right {
      display: grid;
      grid-template-columns: 2fr 2fr 1fr;
    }
  }

  .table-body {
    flex: 1;
    display: grid;
    padding: var(--number-8);
    gap: var(--memo-content-item-gap);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(
      var(--memo-content-item-row),
      minmax(var(--memo-content-item-height), auto)
    );
  }
}
</style>
