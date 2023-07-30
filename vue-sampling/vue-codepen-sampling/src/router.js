import {
    createRouter,
    createWebHistory
  } from 'vue-router'
import MainHome from './components/main/MainHome.vue'
import EditorHome from './components/editor/EditorHome.vue'
  
export const router = createRouter({
history: createWebHistory(),
routes: [
{
    name: 'MainHome',
    component: MainHome,
    path: '/'
},
{
    name: 'EditorHome',
    component: EditorHome,
    path: '/editor'
    }
]
})