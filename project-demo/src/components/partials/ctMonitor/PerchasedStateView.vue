<template>
  <p :class="propClass" >{{ text }}</p>
</template>

<script>
export default {
    props: {
        propClass: String,
        text: String
    },
};
</script>

<style></style>
