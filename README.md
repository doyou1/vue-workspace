# How to set Vue3 + Vite + tailwind
- [reference commit](https://github.com/doyou1/vue-workspace/commit/d33a58cfe103113f32a958fce12fcb2945daa064)
- [reference document](https://tailwindcss.com/docs/guides/vite)


### Vite + Vue project create
npm create vite@latest {project name} -- --template vue-ts

### SCSS
npm add -D sass

### element-plus
npm install element-plus --save

```javascript
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```