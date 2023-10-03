<template>
  <div class="card">
    <div class="media" :style="mediaBg" v-if="mediaHref"></div>
    <h3 class="title">{{ title }}</h3>
    <div class="sub-text">{{ subText }}</div>
    <p class="supporting-text">{{ supportingText }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue"

const { title, subText, mediaHref, supportingText } = defineProps({ title: String, subText: String, mediaHref: String, supportingText: String})
const mediaBg = computed(() => {`url(${mediaHref})`})
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
.card {
    background-color: #fff;
    border-radius: .2rem;
    box-shadow: rgb(150,150,150) 0px 1px 3px;
    width: 350px;
    padding: .8rem;
    font-family: 'Quicksand', sans-serif;
}

.media {
    height: 150px;
}

.title {
    margin-bottom: 0;
}

</style>