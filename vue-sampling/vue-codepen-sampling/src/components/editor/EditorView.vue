<script setup>
import { ref } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

const props = defineProps(['lang', 'code']);
const emit = defineEmits(['onChange']);
const code = ref(props.code);
const extensions = ref([]);
const displayLang = ref("");
const isOpen = ref(true);

if(props.lang == "html") {
    extensions.value = [html()];
    displayLang.value = "Html";
} else if(props.lang == "css") {
    extensions.value = [css()];
    displayLang.value = "Css";
} else if(props.lang == "javascript") {
    extensions.value = [javascript()];
    displayLang.value = "Javascript";
}

const onChange = (newVal) => {
    emit("onChange", newVal, props.lang);
}
</script>

<template>
    <div x-data="{isOpen:true}" class="editor-container" :class="{'collapsed':!isOpen}">
        <div class="editor-title">
            {{ displayLang }}
            <button class="expand-collapse-btn" v-on:click="isOpen=!isOpen">
                <FontAwesomeIcon :icon="isOpen ? faCompressAlt : faExpandAlt" />
            </button>
        </div>
        <Codemirror
        class="code-mirror-wrapper"
        v-model="code"
        placeholder="Code goes here..."
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        @change="onChange"
        />
    </div>

</template>

<style scoped>
.editor-container {
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: .5rem;
  background-color: hsl(225, 6%, 25%);
}

.editor-container.collapsed {
  flex-grow: 0;
}

.editor-container.collapsed .CodeMirror-scroll {
  position: absolute;
  overflow: hidden !important;
}

.expand-collapse-btn {
  margin-left: .5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.editor-title {
  display: flex;
  justify-content: space-between;
  background-color: hsl(225, 6%, 13%);
  color: white;
  padding: .5rem .5rem .5rem 1rem;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
}

.code-mirror-wrapper {
  flex-grow: 1;
  border-bottom-right-radius: .5rem;
  border-bottom-left-radius: .5rem;
  overflow: hidden;
}
</style>
