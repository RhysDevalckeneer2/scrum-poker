import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Import views
import HomeView from '../views/Home/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
   },
   {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('../views/Error/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router