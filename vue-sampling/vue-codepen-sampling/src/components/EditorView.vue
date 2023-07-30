<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'

const props = defineProps(['lang', 'code']);
const emit = defineEmits(['onChange']);
const code = ref(props.code);
const extensions = ref([]);

if(props.lang == "html") {
    extensions.value = [html()];
} else if(props.lang == "css") {
    extensions.value = [css()];
} else if(props.lang == "javascript") {
    extensions.value = [javascript()];
}

const onChange = (newVal) => {
    emit("onChange", newVal, props.lang);
}
</script>

<template>
    <Codemirror
        v-model="code"
        placeholder="Code goes here..."
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        @change="onChange"
    />
</template>

<style scoped>
</style>
