
// 其他 入口页面独立的初始化
import '@/styles/index.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Other from './other/other.vue'

new Vue({
    el: '#app',
    render: h => h(Other)
})
