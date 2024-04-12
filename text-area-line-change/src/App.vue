<script setup lang="ts">
import { ElInput } from 'element-plus';
import { computed, ref } from 'vue';

const text = ref<string>("");

const computedText = computed(() => {
  let result = "";
  [...text.value].forEach((char, i) => {
    /** Enter key 클릭시 */
    if (text.value.charCodeAt(i) === 10) {
      result += "\n"
    } else {
      result += char;
    }
  })

  return result;
})
</script>

<template>
  <div>
    <el-input v-model="text" type="textarea" />
    <div>text: {{ text }}</div>
    <div class="n-contain">computedText: {{ computedText }}</div>
  </div>
</template>

<style scoped>
.n-contain {
  white-space: pre-wrap;
}
</style>
