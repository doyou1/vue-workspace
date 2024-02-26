<template>
  <header class="header">
    <div class="left">
      <jh-button :text="true" size="small" @click="$emit('click:home')">
        <div class="home-btn h2-text-b">단어장</div>
      </jh-button>
      <jh-input
        :model-value="meta.title"
        width="200px"
        placeholder="Title..."
        @update:model-value="(value) => $emit('update:meta', 'title', value)"
      />
    </div>
    <div class="right">
      <jh-select
        :model-value="meta.currentMode"
        :options="modes"
        @update:model-value="
          (value) => $emit('update:meta', 'currentMode', value)
        "
      />
      <jh-input-number
        :model-value="meta.repeatCount"
        @update:model-value="
          (value) => $emit('update:meta', 'repeatCount', value ?? 1)
        "
      />
      <div class="buttons">
        <jh-button
          :text="true"
          size="small"
          @click="$emit('update:meta', 'isLock', !meta.isLock)"
        >
          <icon-lock-open v-if="!meta.isLock" class="icon-color" />
          <icon-lock-close v-else class="icon-color" />
        </jh-button>
        <jh-button :text="true" size="small" @click="clickCopy">
          <icon-copy class="icon-color" />
        </jh-button>
        <jh-button :text="true" size="small" @click="clickImportExport">
          <icon-import-export class="icon-color" />
        </jh-button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "MemoHeader",
};
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import JhButton from "@/components/commons/JhButton.vue";
import JhInput from "@/components/commons/JhInput.vue";
import JhInputNumber from "@/components/commons/JhInputNumber.vue";
import JhSelect from "@/components/commons/JhSelect.vue";
import IconLockOpen from "@/components/commons/images/IconLockOpen.vue";
import IconLockClose from "@/components/commons/images/IconLockClose.vue";
import IconCopy from "@/components/commons/images/IconCopy.vue";
import IconImportExport from "@/components/commons/images/IconImportExport.vue";
import {
  DataModelMeta,
  DataModelMetaKeys,
  DataModelMetaValues,
} from "@/composables/use-form-data";

defineProps<{
  meta: DataModelMeta;
}>();

defineEmits<{
  (e: "update:meta", key: DataModelMetaKeys, value: DataModelMetaValues): void;
  (e: "click:home"): void;
}>();

const modes = [
  { label: "일반 단어장", value: "default" },
  { label: "카드(순서)", value: "flipOrder" },
  { label: "카드(랜덤)", value: "flipRandom" },
  { label: "객관식(순서)", value: "quizOrder" },
  { label: "객관식(랜덤)", value: "quizRandom" },
];

const clickCopy = () => {
  console.log("clickCopy");
};
const clickImportExport = () => {
  console.log("clickImportExport");
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: var(--number-8);
  border-bottom: 1px solid var(--color-gray-100);

  .left {
    display: flex;
    align-items: center;
    .home-btn {
      color: var(--color-base-text);
    }
    .el-input {
      display: block;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .buttons {
      display: flex;
      align-items: center;
      margin-left: var(--number-8);

      .icon-color {
        color: var(--color-gray-100);
      }
    }
  }
}
</style>
