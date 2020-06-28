import { createRouter, createWebHistory } from 'vue-router'

import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'

const routes = [
    {
        path: '/page1',
        name: 'page1',
        component: Page1
    },
    {
        path: '/page2',
        name: 'page2',
        component: Page2
    }
]

export const routerHistory = createWebHistory()
export const router = createRouter({
    history: routerHistory,
    routes
})

router.beforeEach((to, from, next) => {
    console.log('beforeEach', to.name);
    next()
})

export default router