<template>
  <div class="wrap">
    <div class="paper">
      <div class="paper-content">
        <input v-model="title" placeholder="편지제목" />
        <textarea v-model="text" placeholder="편지내용" />
        <button>등록하기</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("ㅇㅇ에게");
const text = ref(" Lorem ipsum dolor sit amet consectetur. Habitant  dapibus eget curabitur mauris sit id congue. Ultrices risus arcu ligula etiam condimentum posuere in leo sed. Sit nisi ac in dolor netus. Varius libero sit accumsan etiam velit facilisi ut. Sodales vitae vitae sed sed. Neque sem massa facilisis vel. Sit lacus commodo diam nunc imperdiet amet. Lorem cursus suspendisse et laoreet hendrerit. Dictum pharetra tellus urna duis nec.At orci tempor eu hac. In at maecenas interdum orci libero posuere bibendum sagittis. Consectetur facilisis neque posuere quisque vitae arcu sed. Ac amet ac tempus cras. Nam cum amet aliquet diam et.");
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.paper {
  position: relative;
  width: 328px;
  height: 424px;
  background-image: url(./assets/text-area-bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow-y: scroll;
}

.paper-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.paper-content input {
  border: none;
  margin: 26px auto 34px auto;
  padding: 0 10px;
  z-index: 1;
  background: transparent;

  /* line-height: 30px;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px; */

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 17.6px */
}
.paper-content textarea {
  border: none;
  flex: 1;
  margin: 0 20px;
  background: transparent;
  z-index: 1;

  /* line-height: 30px;
  font-weight: bold;
  font-size: 18px; */

  text-align: justify;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
}

.paper-content button {
  margin: 26px 20px;
}
</style>
