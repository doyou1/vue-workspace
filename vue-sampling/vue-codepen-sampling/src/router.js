import {
    createRouter,
    createWebHistory
  } from 'vue-router'
  import EditorHome from './components/EditorHome.vue'
  
  export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        name: 'EditorHome',
        component: EditorHome,
        path: '/editor'
      }
    ]
  })