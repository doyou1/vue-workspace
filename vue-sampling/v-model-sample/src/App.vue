<template>
  <base-input v-model="content"></base-input>
  <div>
    Parent: {{ content }}
  </div>
</template>

<script>
import BaseInput from './components/BaseInput.vue'

export default {
  name: 'App',
  data() {
    return {
      content: "default content"
    }
  },
  components: {
    BaseInput
  }
}
</script>

<style>
</style>
