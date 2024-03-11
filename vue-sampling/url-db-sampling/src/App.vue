<template>
  <div>data: {{ data }}</div>
  <input v-model="data" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";

type DataModel = {
  data: string;
};

const data = ref("");

const model = computed<DataModel>(() => {
  return {
    data: data.value,
  };
});


watch(model, () => {
  // btoa encoding
  if (model.value.data === "") {
    clearPath();
  } else {
    history.pushState("", "", `#${btoa(JSON.stringify(model.value))}`);
  }
});

const clearPath = () => {
  history.pushState("", "", "/");
}

onMounted(() => {
  if (window.location.hash !== "") {
    // atob encoding
    const urlData = JSON.parse(atob(window.location.hash.substring(1)));
    if (typeof urlData === "object" && isTargetObject(urlData)) {
      if (urlData.data === "") {
        clearPath();
      } else {
        data.value = urlData.data;
      }
    }
  }
});


const isTargetObject = (data: Object): data is DataModel => {
  return Object.keys(data).some((key) => key === "data");
}
</script>
