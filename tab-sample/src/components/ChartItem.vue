<template>
  <div class="tabs_content"
  v-show="selectedTitle == title">
        {{title}}
  </div>
</template>

<script>
export default {
    props: ["title", "text"],
    inject: ["selectedTitle"],
}
</script>

<style>

</style>