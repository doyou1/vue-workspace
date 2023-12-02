import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { VueQueryPlugin } from "vue-query";

const app = createApp(App);
app.use(ElementPlus);
app.use(VueQueryPlugin);
app.mount("#app");
