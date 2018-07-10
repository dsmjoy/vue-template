import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/** home routes **/
import homeRoutes from './modules/home'
import Home from '@/top-views/home/home.vue'
/** home routes **/

/** home routes **/
import loginRoutes from './modules/login'
import Login from '@/top-views/login/login.vue'
/** home routes **/

import { routerBeforeEachGuard, routerAfterEachGuard } from './guards'

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        children: homeRoutes
    },
    {
        name: 'login',
        path: '/login',
        meta: {
            requireNoAuth: true
        },
        component: Login,
        children: loginRoutes
    }
]

const router = new Router({
    routes
})

router.beforeEach(routerBeforeEachGuard)
router.afterEach(routerAfterEachGuard)

export default router
