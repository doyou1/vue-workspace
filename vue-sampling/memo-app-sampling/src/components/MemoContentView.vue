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
        <!-- index + 1 <= row <- left -->
        <div  class="left">
          <memo-content-item
            v-for="(item, index) in splitted.left" :key="`${item.id}_${index}`"
            :index="index"
            :content="item"
            @update:content="
              (index, key, value) => emits('update:content', index, key, value)
            "
          />
          <!-- Plus -->
          <memo-content-item
            v-if="row >= contents.length && contents.length < row * 2"
            :content="undefined"
            @add:content="emits('add:content')"
          />
        </div>
        <!-- index + 1 > row <- right -->
        <div class="right">
          <memo-content-item
            v-for="(item, index) in splitted.right" :key="`${item.id}_${row + index}`"
            :index="row + index"
            :content="item"
            @update:content="
              (index, key, value) => emits('update:content', index, key, value)
            "
          />
          <!-- Plus -->
          <memo-content-item
            v-if="row < contents.length && contents.length < row * 2"
            :content="undefined"
            @add:content="emits('add:content')"
          />
        </div>
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
} from "@/composables/use-form-data";
import MemoContentItem from "@/components/content/MemoContentItem.vue";

const props = defineProps<{
  contents: DataModelContent[];
}>();
const emits = defineEmits<{
  <K extends keyof DataModelContent>(
    e: "update:content",
    index: number,
    key: K,
    value: DataModelContent[K],
  ): void;
  (e: "add:content"): void;
}>();

const contentContainerRef = ref<HTMLDivElement>();

const row = computed(() => {
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
  return row;
});

const splitted = computed(() => {
  const left: DataModelContent[] = [];
  const right: DataModelContent[] = [];
  left.push(...props.contents.slice(0, row.value));
  right.push(...props.contents.slice(row.value));
  return {
    left,
    right
  }

})
const innerStyle = computed(() => {
  return {
    "--memo-content-item-height": `${memoContentItemHeight}px`,
    "--memo-content-item-gap": `${memoContentItemGap}px`,
    "--memo-content-item-row": row.value,
  };
});
</script>

<style scoped>
.content-view {
  flex: 1;
  display: flex;
  flex-direction: column;

  .table-head {
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
    padding: var(--number-8);
    gap: var(--memo-content-item-gap);
    display: flex;
    

    .left,
    .right {
      flex: 1;
    }
  }
}
</style>
