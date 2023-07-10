<template>
    <div id="nav-bar" class="w-full h-14 flex">
      <div id="nav-bar-left" class="grow">
        <span id="nav-home-logo" class="group hover:cursor-pointer">
          <img class="inline mx-1 w-6 h-6 group-hover:opacity-25" alt="Vue logo" src="../assets/logo.png">
          <span class="mx-1 font-bold group-hover:text-slate-300">Vue.js</span>
        </span>

        <span id="nav-search" class="group hover:cursor-pointer">
          <img class="mx-0.5 inline w-6 h-6 opacity-25 group-hover:opacity-100" alt="Search Icon" src="../assets/search_icon.png">
          <span class="mx-0.5 text-slate-400 group-hover:text-black">Search</span>
          <span class="mx-1 border rounded-md text-slate-300 group-hover:text-[#42b883] group-hover:border-[#42b883]">
            <span class="ml-2 mx-1">⌘</span>
            <span class="mr-2 mx-1">K</span> 
          </span>
        </span>
      </div>

      <div id="nav-buttons" class="grow">
        <span class="mx-2 hover:cursor-pointer group">
          <span class="group-hover:text-slate-300">Docs</span>
          <img class="inline w-4 h-4 group-hover:opacity-25" alt="Dropdown Icon" src="../assets/down_arrow_icon.png">
        </span>
        <span class="mx-2 hover:cursor-pointer hover:text-[#42b883]">API</span>
        <span class="mx-2 hover:cursor-pointer hover:text-[#42b883]">Playground</span>
        <span class="mx-2 hover:cursor-pointer group">
          <span class="group-hover:text-slate-300">Ecosystem</span>
          <img class="inline w-4 h-4 group-hover:opacity-25" alt="Dropdown Icon" src="../assets/down_arrow_icon.png">
        </span>
        <span class="mx-2 hover:cursor-pointer hover:text-[#42b883]">About</span>
        <span class="mx-2 hover:cursor-pointer hover:text-[#42b883]">Sponsor</span>
        <span class="mx-2 hover:cursor-pointer hover:text-[#42b883]">Partners</span>
        <span class="mx-2 hover:cursor-pointer border-x">
          <img class="mx-2 inline w-5 h-5 group-hover:opacity-25" alt="Language Translation Icon" src="../assets/language_translation_icon.png">
        </span>

        <!-- <span class="m-2 border w-10 rounded-full flex-col items-center justify-center text-slate-300 bg-slate-100 hover:border-[#42b883]"> -->
          <!-- <img class="mr-1 inline w-5 h-5 rounded-full bg-white" alt="Language Translation Icon" src="../assets/sun_icon.png"> -->
          <!-- <img class="ml-1 inline w-5 h-5 rounded-full bg-white" alt="Language Translation Icon" src="../assets/moon_icon.png"> -->
        <!-- </span> -->
        <span class="mx-2 ">
          <Toggle v-model="value" :classes="{
          container: 'inline-block',
          toggle: 'flex w-10 h-5 rounded-full relative border cursor-pointer transition items-center box-content text-xs leading-none',
          toggleOn: 'bg-[#2F2F2F] border-[#66666641] justify-start',
          toggleOff: 'bg-[#F1F1F1] border-[#3C3C3C1D] justify-end',
          handleOn: 'left-full bg-black transform -translate-x-full',
          handleOff: 'left-0 bg-white',
          }" />
        </span>
      </div>
    </div>
</template>
  
  <script>
  import Toggle from '@vueform/toggle'

  export default {
    name: 'HomeView',
    props: {
      msg: String
    },
    components: {
      Toggle,
    },
    data() {
      return {
        value: true
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>

<style src="@vueform/toggle/themes/default.css"></style>
  