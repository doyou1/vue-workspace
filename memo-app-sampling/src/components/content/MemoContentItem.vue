<template>
  <div class="content-item">
    <template v-if="content && index !== undefined">
      <div class="word">
        <jh-input
          :model-value="content.word"
          placeholder="Word..."
          @update:model-value="$emit('update:content', index, 'word', $event)"
        />
      </div>
      <div class="meaning">
        <jh-input
          :model-value="content.meaning"
          placeholder="Meaning..."
          @update:model-value="
            $emit('update:content', index, 'meaning', $event)
          "
        />
      </div>
      <div class="menu">
        <jh-button :text="true" size="small">
          <icon-more class="icon-color" />
        </jh-button>
      </div>
    </template>
    <template v-else>
      <div class="add">
        <jh-button :text="true" size="small" @click="$emit('add:content')">
          <icon-circle-add class="icon-color" />
        </jh-button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "MemoContentItem",
};
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import {
  DataModelContent,
  DataModelContentKeys,
  DataModelContentValues,
} from "@/composables/use-form-data";
import JhInput from "@/components/commons/JhInput.vue";
import JhButton from "@/components/commons/JhButton.vue";
import IconMore from "@/components/commons/images/IconMore.vue";
import IconCircleAdd from "@/components/commons/images/IconCircleAdd.vue";

defineProps<{
  index?: number;
  content?: DataModelContent;
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
</script>

<style scoped>
.content-item {
  height: var(--memo-content-item-height);
  border: 1px solid var(--color-gray-100);

  display: grid;
  justify-content: center;
  align-items: center;

  &:not(:has(.add)) {
    grid-template-columns: 2fr 2fr 1fr;
  }

  .word,
  .meaning,
  .menu,
  .add {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu {
    .icon-color {
      color: var(--color-gray-100);
    }
  }
}
</style>
