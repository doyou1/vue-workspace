<script setup>
import Title from "./components/Title.vue";
import InputForm from "./components/InputForm.vue";
import GoogleMap from "./components/GoogleMap.vue";
import SearchResult from "./components/SearchResult.vue";
import { ref } from "vue";

const isSearched = ref(false);
const toggleIsSearched = () => {
  isSearched.value = !isSearched.value;
}
</script>

<template>
  <div>
    <Title />
    <InputForm 
      :isSearched="isSearched" 
      @toggle-is-searched="toggleIsSearched"/>
    <GoogleMap v-if="!isSearched" style="width: 500px; height: 300px"/>
    <template v-else-if="isSearched">
      <SearchResult style="width: 500px; height: 300px"/>
    </template>
    
  </div>
</template>

<style scoped></style>
