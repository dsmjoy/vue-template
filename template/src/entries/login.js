
// login 页面独立的初始化
import '@/styles/index.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Login from './login/login.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})
