import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import { remAdjust } from '@/utils/index'
import filters from '../filters'
Vue.config.devtools = process.env.NODE_ENV === 'development'

/**
 * 公用的初始化代码
 */
// rem

remAdjust()

// 全局过滤器初始化
for(let func in filters) {
    Vue.filter(func, filters[func])
}
