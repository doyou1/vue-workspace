<script lang="ts">
export default {
  name: "ReChildView",  
};
</script>

<script setup lang="ts">
import type { ReData } from '../App.vue';

defineProps<{
  data: ReData;
}>();
</script>

<template>
  <ul>
        <li>
            {{data.name}}
            <ReChildView v-if="data.child" :data="data.child"></ReChildView>
        </li> 
  </ul>
</template>

<style scoped>
</style>