import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import '@/config/index'
Vue.config.devtools = process.env.NODE_ENV === 'development'
import { remAdjust } from '@/utils/index'
remAdjust()
