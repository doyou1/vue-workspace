<template>
  <div class="card">
    <div class="media" :style="mediaBg" v-if="mediaHref"></div>
    <h3 class="title">{{ title }}</h3>
    <div class="sub-text">{{ subText }}</div>
    <p class="supporting-text">{{ supportingText }}</p>
    <div v-if="buttonText">
			<a class="material-button">{{ buttonText }}</a>
		</div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const { title, subText, mediaHref, supportingText, buttonText } = defineProps({
  title: String,
  subText: String,
  mediaHref: String,
  supportingText: String,
	buttonText: String,
});
const mediaBg = computed(() => ({ backgroundImage: `url("${mediaHref}")` }));
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
.card {
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: rgb(150, 150, 150) 0px 1px 3px;
  width: 350px;
  padding: 0.8rem;
  font-family: "Quicksand", sans-serif;
}

.media {
  height: 150px;
}

.title {
  margin-bottom: 0;
}

.material-button {
	color: rgb(76, 6, 141);
	text-transform: uppercase;
	letter-spacing: 1px;
	cursor: pointer;
	padding: .2rem;
	font-weight: bold;
	transition: .3s all linear;
}

.material-button:hover {
	background-color: rgba(106, 20, 185, .082);
}
</style>
