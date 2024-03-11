<template>
  CustomView
  <el-button @click="visibleAppendToBodyDialog = true">open dialog</el-button>
  <append-to-body-dialog :visible="visibleAppendToBodyDialog" @close="visibleAppendToBodyDialog = false">
    append to body dialog in customview
    <template #footer>
      footer in customview
    </template>
  </append-to-body-dialog>


  <div class="dialogs">
    <custom1-dialog :visible="false" />
    <custom2-dialog :visible="false" />
    <custom3-dialog :visible="false" />
    <default-dialog :visible="false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElButton } from "element-plus";
import AppendToBodyDialog from "./AppendToBodyDialog.vue";
import Custom1Dialog from "./Custom1Dialog.vue";
import Custom2Dialog from "./Custom2Dialog.vue";
import Custom3Dialog from "./Custom3Dialog.vue";
import DefaultDialog from "./DefaultDialog.vue";
const visibleAppendToBodyDialog = ref<boolean>(false);
</script>

<style lang="scss">

#dialog .append-to-body-dialog {
  background-color: black;
}
</style>
