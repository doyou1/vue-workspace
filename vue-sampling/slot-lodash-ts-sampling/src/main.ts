import { createApp } from 'vue'
import App from './App.vue'
import VueLodash from 'vue-lodash'

const app = createApp(App);
app.use(VueLodash);
app.mount('#app');
