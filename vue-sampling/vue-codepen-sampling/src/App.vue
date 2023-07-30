<script setup>
import EditorView from "./components/EditorView.vue";
import { ref } from 'vue'

const html = ref("");
const css = ref("");
const javascript = ref("");

const onChange = (newVal, lang) => {
  if(lang == "html") {
    html.value = newVal;
  } else if(lang == "css") {
    css.value = newVal;
  } else if(lang == "javascript") {
    javascript.value = newVal;
  }
  onChangeSrcDoc();
};

const srcDoc = ref(`<html><body>${html.value}</body><style>${css.value}</style><script>${javascript.value}<\/script></html>`)

const onChangeSrcDoc = () => {
  const timeout = setTimeout(() => {
      srcDoc.value = `<html><body>${html.value}</body><style>${css.value}</style><script>${javascript.value}<\/script></html>`;
    }, 250)
    return () => clearTimeout(timeout)
}
</script>

<template>
  <div class="pane top-pane">
    <EditorView lang="html" :code="html" @onChange="onChange" />
    <EditorView lang="css" :code="css" @onChange="onChange" />
    <EditorView lang="javascript" :code="javascript" @onChange="onChange" />

  </div>
  <div class="pane">
    <iframe
      title="output"
      :srcDoc="srcDoc"
      sandbox="allow-scripts"
      frameborder="0"
      width="100%"
      height="100%"
      />
  </div>
</template>

<style scoped>
</style>
