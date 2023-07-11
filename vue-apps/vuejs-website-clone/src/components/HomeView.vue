<template>
  <div id="wrap" class="grid grid-rows-1">
    <div id="nav-bar" ref="navBar" class="fixed w-full h-auto top-0 flex justify-around my-4 text-sm" >
      <div id="nav-bar-left" class="grid grid-flow-col">
        <span id="nav-home-logo" class="group hover:cursor-pointer">
          <img class="inline mx-1 w-6 h-6 group-hover:opacity-25" alt="Vue logo" src="../assets/logo.png">
          <span class="mx-1 text-base font-bold group-hover:text-slate-300">Vue.js</span>
        </span>

        <span id="nav-search" class="group hover:cursor-pointer">
          <img class="align-middle mx-0.5 inline w-6 h-6 opacity-25 group-hover:opacity-100" alt="Search Icon" src="../assets/search_icon.png">
          <span class="align-middle mx-0.5 text-slate-400 group-hover:text-black">Search</span>
          <span class="align-middle mx-1 border rounded-md text-slate-300 group-hover:text-[#42b883] group-hover:border-[#42b883]">
            <span class="inline-block align-middle mx-2">⌘ K</span>
          </span>
        </span>
      </div>

      <div id="nav-buttons" class="grid grid-flow-col">
        <div class="mx-2 relative hover:cursor-pointer group grid-rows-1 static"
          v-on:mouseover="hover('Docs', true)" v-on:mouseleave="hover('Docs', false)" 
        >
          <div>
            <span class="group-hover:text-slate-300">Docs</span>
            <img class="inline w-4 h-4 group-hover:opacity-25" alt="Dropdown Icon" src="../assets/down_arrow_icon.png">
          </div>
          <div v-if="hoverDocsFlag"
                class="z-10 fixed text-left grid grid-flow-row rounded-md shadow-lg"> 
                <div class="mt-2"></div>

                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Guide</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Tutorial</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Examples</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Quick Start</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Glossary</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Vue 2 Docs <img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Migration from Vue 2 <img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
          
                <div class="mt-2"></div>
            </div>
        </div>

        <div class="mx-2 hover:cursor-pointer group grid-rows-1"
          v-on:mouseover="hover('API', true)" v-on:mouseleave="hover('API', false)"        
        >
          <div>
            <span class="group-hover:text-[#42b883]">API</span>
          </div>
        </div>
        <div class="mx-2 hover:cursor-pointer group grid-rows-1"
          v-on:mouseover="hover('Playground', true)" v-on:mouseleave="hover('Playground', false)"        
        >
          <div>
            <span class="group-hover:text-[#42b883]">Playground</span>
          </div>
        </div>

        <div class="mx-2 relative hover:cursor-pointer group grid-rows-1 static"
          v-on:mouseover="hover('Ecosystem', true)" v-on:mouseleave="hover('Ecosystem', false)"        
        >
          <div>
            <span class="group-hover:text-slate-300">Ecosystem</span>
            <img class="inline w-4 h-4 group-hover:opacity-25" alt="Dropdown Icon" src="../assets/down_arrow_icon.png">
          </div>
          <div v-if="hoverEcosystemFlag"
                class="z-10 fixed text-left grid grid-flow-row rounded-md shadow-lg">
                <div class="mt-2"></div>

                <div class="mx-2 my-1 hover:cursor-default text-slate-300">RESOURCES</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Partners</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Themes</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Certification<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Jobs<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">T-Shirt Shop<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mb-4"></div>

                <div class="mx-2 my-1 hover:cursor-default text-slate-300">OFFICIAL LIBRARIES</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Vue Router<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Pinia<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Tooling Guide</div>
                <div class="mb-4"></div>

                <div class="mx-2 my-1 hover:cursor-default text-slate-300">VIDEO COURSES</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Vue Mastery<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Vue School<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mb-4"></div>

                <div class="mx-2 my-1 hover:cursor-default text-slate-300">HELP</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Discord Chat<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">GitHub Discussions<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">DEV Community<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mb-4"></div>

                <div class="mx-2 my-1 hover:cursor-default text-slate-300">NEWS</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Blog<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Twitter<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Events<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>
                
                <div class="mt-2"></div>
              </div>
        </div>
        
        <div class="mx-2 relative hover:cursor-pointer group grid-rows-1 static"
          v-on:mouseover="hover('About', true)" v-on:mouseleave="hover('About', false)"        
        >
          <div>
            <span class="group-hover:text-slate-300">About</span>
            <img class="inline w-4 h-4 group-hover:opacity-25" alt="Dropdown Icon" src="../assets/down_arrow_icon.png">
          </div>
          <div v-if="hoverAboutFlag"
                class="z-10 fixed text-left grid grid-flow-row rounded-md shadow-lg">
                <div class="mt-2"></div>

                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">FAQ</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Team</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Releases</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Community Guide</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">Code of Conduct</div>
                <div class="mx-2 my-1 hover:cursor-pointer hover:text-[#42b883]">The Documentary<img class="inline w-3 h-3 opacity-50" alt="OutLink Icon" src="../assets/right_up_arrow_icon.png"></div>

                <div class="mt-2"></div>
              </div>
        </div>

        <div class="mx-2 hover:cursor-pointer group grid-rows-1"
          v-on:mouseover="hover('Sponsor', true)" v-on:mouseleave="hover('Sponsor', false)"        
        >
          <div>
            <span class="group-hover:text-[#42b883]">Sponsor</span>
          </div>
        </div>

        <div class="mx-2 hover:cursor-pointer group grid-rows-1"
          v-on:mouseover="hover('Partners', true)" v-on:mouseleave="hover('Partners', false)"        
        >
          <div>
            <span class="group-hover:text-[#42b883]">Partners</span>
          </div>
        </div>


        <div class="mx-4 hover:cursor-pointer group grid-rows-1 border-x"
        >
          <div class="mx-2">
            <img class="inline w-5 h-5 group-hover:opacity-25" alt="Language Translation Icon" src="../assets/language_translation_icon.png">
          </div>
        </div>

        <div class="mx-2 hover:cursor-pointer group grid-rows-1">
          <Toggle v-model="darkModeFlag" 
          on-label="Dark"
          off-label="Light"
          :classes="{
          container: 'inline-block',
          toggle: 'flex w-14 h-5 rounded-full relative border cursor-pointer transition items-center box-content text-xs leading-none',
          toggleOn: 'bg-[#2F2F2F] border-[#66666641] justify-start text-white',
          toggleOff: 'bg-[#F1F1F1] border-[#3C3C3C1D] justify-end text-black',
          handleOn: 'left-full bg-black transform -translate-x-full',
          handleOff: 'left-0 bg-white',
          }"  />
        </div>
        <div class="mx-2 hover:cursor-pointer group grid-rows-1"
        >
          <img class="mx-1 inline w-5 h-5 opacity-50 hover:opacity-100" alt="Github Icon" src="../assets/github_icon.png">
          <img class="mx-1 inline w-5 h-5 opacity-50 hover:opacity-100" alt="Twitter Icon" src="../assets/twitter_icon.png">
          <img class="mx-1 inline w-5 h-5 opacity-50 hover:opacity-100" alt="Discord Icon" src="../assets/discord_icon.png">
        </div>
      </div>
    </div>

    <div id="content" class="w-full">
      <div id="content-top-spacing" :style="{paddingTop: `${contentPaddingTop}px`}" />
    
      <div class="w-full h-auto pt-48 pb-5 px-24 my-2 text-7xl font-black tracking-tighter">
        <div>The <span id="progressive">Progressive</span></div>
        <div>JavaScript Framework</div>
      </div>

      <div class="w-full h-auto my-2 text-2xl text-[#606060] opacity-60 tracking-tighter">
        An approachable, performant and versatile framework for building web user interfaces.
      </div>

      <div class="w-full h-auto my-4 flex justify-center">
        <div class="text-lg font-bold mx-3 px-2 py-1 group bg-[#42b883] rounded-md hover:cursor-pointer opacity-80 hover:opacity-100">
          <img class="mx-1 inline w-5 h-5 rounded-full" alt="Play Icon" src="../assets/play_icon.svg">
          <span class="mx-1 text-white ">Why Vue</span>
        </div>
        <div class="text-lg font-bold mx-3 px-2 py-1 group rounded-md hover:cursor-pointer">
          <span class="ml-1 mr-0.5 text-[#476582]">Get Started</span>
          <img class="mr-1 group-hover:ml-1 group-hover:mr-0 inline w-5 h-5" alt="Right Arrow Icon" src="../assets/right_arrow_icon.svg">
        </div>
        <div class="text-lg font-bold mx-3 px-2 py-1 rounded-md hover:cursor-pointer">
          <span class="mx-1 text-[#476582]">Install</span>
        </div>
      </div>
    </div>
  </div>



</template>
  
<script setup>
  import { ref, reactive, computed } from 'vue';
  import { useElementSize } from '@vueuse/core';
  import Toggle from '@vueform/toggle';

  const hoverDocsFlag = ref(0);
  const hoverEcosystemFlag = ref(0);
  const hoverAboutFlag = ref(0);
  const darkModeFlag = ref(false);

  const hover = (target, isOver) => {
        if(target === "Docs") {
          if(hoverDocsFlag.value === isOver) return;
          hoverDocsFlag.value = isOver;
        } else if(target === "Ecosystem") {
          if(hoverEcosystemFlag.value === isOver) return;
          hoverEcosystemFlag.value = isOver;
        } else if(target === "About") {
          if(hoverAboutFlag.value === isOver) return;
          hoverAboutFlag.value = isOver;
        }
      }

  const navBar = ref(null);
  const navBarSize = reactive(
    useElementSize(
      navBar,
      { width: 0, height: 0},
    ),
  )

  const contentPaddingTop = computed(() => {
    return `${Math.ceil(navBarSize.height) + 24}`;
  })

</script>
  
<style src="@vueform/toggle/themes/default.css"></style>

<style>
#progressive {
  background: 
  -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>