
import '@/styles/index.scss';

import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Router)

import Login from './login/login.vue'
import store from '@/store/index'

const routes = [

]

const router = new Router({
    routes
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
