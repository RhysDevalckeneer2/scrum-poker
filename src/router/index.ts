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
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/Auth/SignupView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Auth/LoginView.vue')
    },
    {
        path: '/sessions',
        children: [
            {
                path: "create",
                component: () => import('../views/Table/TableView.vue')
            },
            {
                path: "join",
                component: () => import('../views/Table/TableView.vue')
            },
            {
                path: ":id",
                component: () => import('../views/Table/TableView.vue')
            },
        ]
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