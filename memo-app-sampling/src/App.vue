<template>
  <div class="wrap">
    <memo-header
      :meta="model.meta"
      @update:meta="updateMeta"
      @click:home="
        clearPath();
        refresh();
      "
    />
    {{ model }}
  </div>
</template>

<script setup lang="ts">
import MemoHeader from "@/components/MemoHeader.vue";
import { useFormData } from "@/composables/use-form-data";

const { model, updateMeta, clearPath, refresh } = useFormData();
</script>

<style scoped lang="scss">
.wrap {
  width: 750px;
  height: calc(100vh - 2rem);
  margin: 0 auto;
}
</style>
