<template>

  <!-- Modal -->
  <!-- <div class="black-bg" v-if="isOpenModal" @click="closeModal"> -->
  <div class="black-bg" v-if="isOpenModal">
      <div class="white-bg" role="dialog">
        <h4>{{ detailTitle }}</h4>
        <p>{{ detailContent }}</p>
      </div>
      <button @click="closeModal">닫기</button>
  </div>

  <div>{{data}}</div>

  <!-- Menu -->
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
    <!-- <a v-for="(menu,index) in menus" :key="menu">{{ menu }} {{ index }}</a> -->
  </div>

  <!-- List -->
  <div v-for="(oneroom, i) in oneroomList" :key="i">
    <input type="hidden" :value="oneroom.id"/>
    <img @click="openModal(oneroom.title, oneroom.content)" class="room-img" :src="oneroom.image" />
    <h4 @click="openModal(oneroom.title, oneroom.content)">{{ oneroom.title }}</h4>
    <p> {{ oneroom.price }}원</p>
    <!-- <img @click="isOpenModal = true" class="room-img" :src="photos[i]" /> -->
    <!-- <h4 @click="isOpenModal = true">{{ product }}</h4>
    <p v-if="i == 0"> 50 만원</p>
    <p v-else>가격아무거나</p> -->
    <!-- <button v-on:click="">허위매물신고</button> <span>신고수 : 0</span> -->
    <!-- <button @mouseover="reports[i]++">허위매물신고</button> <span>신고수 : {{ reports[i] }}</span> -->
    <!-- <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{ reports[i] }}</span> -->

  </div>
</template>

<script>

import data from './assets/oneroom.js';

export default {
  name: 'App',
  data() {
    return {
      isOpenModal: false,
      detailTitle: "DetailTitle",
      detailContent: "DetailContent",
      reports: [0, 0, 0],
      menus: ["Home", "Shop", "About"],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      photos: [require("./assets/room0.jpg"),require("./assets/room1.jpg"),require("./assets/room2.jpg")],
      oneroomList: data
    }
  },
  methods: {
    increase(i) {
      this.reports[i]++;
    },
    openModal(title, content) {
      this.isOpenModal = true;
      this.detailTitle = title;
      this.detailContent = content;
    },
    closeModal() {
      this.isOpenModal = false;
    }
  },
  components: {

  }
}
</script>

<style>
  body {
    margin: 0;
  }

  div {
    box-sizing: border-box;
  }

  .black-bg {
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed; padding: 20px;
  }

  .white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
  }

  .room-img {
    width: 100%;
    margin-top: 40px;
  }
  #app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
  }

  .menu a {
    color: white;
    padding: 10px;

  }

</style>
