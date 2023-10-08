import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

// Typescript + Vue Router
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/index.vue'),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;