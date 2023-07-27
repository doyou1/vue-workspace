<template>
 <div class="bg-gray-100">
    <nav class="bg-blue-700" x-data="{navbarOpen:false}">
      <!-- container -->
      <div class="container flex flex-wrap mx-auto px-4 py-2 lg:space-x-4">
        <!-- brand -->
        <button class="inline-flex p-2 text-white text-xl font-bold uppercase tracking-wider">JH Site</button>
        <!-- brand -->
        <!-- toggle btn -->
        <button class="lg:hidden inline-flex items-center justify-center border h-10 w-10 ml-auto text-white rounded-md outline-none focus:outline-none"
         @click="navbarOpen = !navbarOpen">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <!-- toggle btn -->
        <!-- menu -->
        <div class="w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0" :class="{'hidden':!navbarOpen, 'flex':navbarOpen}">
          <ul class="w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
            <li>
              <button class="flex px-4 py-2 font-medium rounded-md bg-blue-900 text-white hover:bg-blue-800">Dashboard</button>
            </li>
            <li>
              <button class="flex px-4 py-2 font-medium rounded-md text-white hover:bg-blue-800">Projects</button>
            </li>
            <!-- dropdown -->
            <li class="relative" x-data="{dropdownOpen:false}" v-on:mouseover="dropdownOpen=true" v-on:mouseleave="dropdownOpen=false">
              <button class="flex outline-none focus:outline-none px-4 py-2 font-medium rounded-md text-white hover:bg-blue-800">
                Dropdown
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <!-- dropdown menu -->
              <div class="lg:absolute bg-white right-0 rounded-md p-2" :class="{'hidden':!dropdownOpen, 'flex flex-col':dropdownOpen}">
                <ul class="space-y-2 lg:w-48">
                  <li>
                    <button class="w-full flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">Categories</button>
                  </li>
                  <li>
                    <button class="w-full flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">Inventories</button>
                  </li>
                  <li>
                    <button class="w-full flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">Brands</button>
                  </li>
                </ul>
              </div>
              <!-- dropdown menu -->
            </li>
            <!-- dropdown -->
            <li>
              <button class="flex px-4 py-2 font-medium rounded-md text-white hover:bg-blue-800">Orders</button>
            </li>
            <li>
              <button class="flex px-4 py-2 font-medium rounded-md text-white hover:bg-blue-800">Invoices</button>
            </li>
          </ul>
        </div>
        <!-- menu -->
      </div>
      <!-- container -->
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const navbarOpen = ref(false);
const dropdownOpen = ref(false);

</script>
