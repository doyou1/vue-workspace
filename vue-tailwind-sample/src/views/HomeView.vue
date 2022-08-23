<template>
  <div class="w-full flex justify-center">
    <input type="text" 
      placeholder="Enter Pokemon here" 
      class="mt-10 p-2 border-blue-500 border-2"
      v-model="text"
    />
  </div>
  <div class="mt-10 p-4 flex flex-wrap justify-center">
    <div class="ml-4 text-2x text-blue-500"
      v-for="(pokemon, idx) in filteredPokemons"
      :key="idx"
    >
      <router-link :to="`/about/${urlIdLookUp[pokemon.name]}`">
        {{pokemon.name}}
      </router-link>
    </div>
  </div>

</template>

<script>

import { computed, reactive, toRefs } from 'vue';

export default {
  name: "HomeView",
  setup() {

    const state = reactive({
      pokemons: [],
      urlIdLookUp: {},
      text: "",
      filteredPokemons: computed(() => updatePokemon())
    });

    function updatePokemon() {
      if(!state.text) {
        return []
      }

      return state.pokemons.filter((pokemon) => 
        pokemon.name.includes(state.text))
    }

    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        state.pokemons = data.results;
        state.urlIdLookUp = data.results.reduce((acc, cur, idx) =>
          acc = { ...acc, [cur.name]:idx+1}
        ,{}) 
      })

      return { ... toRefs(state)}
  }
}
</script>
