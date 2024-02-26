<template>
  <header class="header">
    <div class="left">
      <jh-button :text="true" size="small" @click="clickHome">
        <div class="home-btn h2-text-b">단어장</div>
      </jh-button>
      <jh-input v-model="title" width="200px" placeholder="Title..." />
    </div>
    <div class="right">
      <jh-select v-model="currentMode" :options="modes" />
      <jh-input-number v-model="repeatCount" />
      <div class="buttons">
        <jh-button :text="true" size="small" @click="toggleLock">
          <icon-lock-open v-if="!isLock" class="icon-color" />
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
  name: "JhHeader",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import JhButton from "@/components/commons/JhButton.vue";
import JhInput from "@/components/commons/JhInput.vue";
import JhInputNumber from "@/components/commons/JhInputNumber.vue";
import JhSelect from "@/components/commons/JhSelect.vue";
import IconLockOpen from "@/components/commons/images/IconLockOpen.vue";
import IconLockClose from "@/components/commons/images/IconLockClose.vue";
import IconCopy from "@/components/commons/images/IconCopy.vue";
import IconImportExport from "@/components/commons/images/IconImportExport.vue";

const title = ref<string>("");
const repeatCount = ref<number>(1);
    
const isLock = ref<boolean>(false);
const currentMode = ref<string>("default");
const modes = [
  { label: "일반 단어장", value: "default" },
  { label: "카드(순서)", value: "flipOrder" },
  { label: "카드(랜덤)", value: "flipRandom" },
  { label: "객관식(순서)", value: "quizOrder" },
  { label: "객관식(랜덤)", value: "quizRandom" },
];

const clickHome = () => {
  console.log("clickHome");
};

const clickCopy = () => {
    console.log("clickCopy");
}
const clickImportExport = () => {
    console.log("clickImportExport");
}

const toggleLock = () => {
  isLock.value = !isLock.value;
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
