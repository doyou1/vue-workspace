<template>
  <div class="wrap">
    <jh-header />
  </div>
</template>

<script setup lang="ts">
import JhHeader from '@/components/JhHeader.vue';
</script>

<style scoped lang="scss">
.wrap {
  // width: 100%;
  width: 750px;
  height: calc(100vh - 2rem);
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;

  margin: 0 auto;

  .content {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: solid 1px black;

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      // display: flex;
      // justify-content: space-between;
      margin: 8px 32px;
      .checkbox {
        margin-right: auto;
      }
    }
  }
}
</style>
