
// index 入口独立的初始化
import '@/styles/index.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './app/app.vue'
import store from '@/store/index'
import router from '@/routes/index'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})