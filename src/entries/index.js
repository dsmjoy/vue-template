
import '@/styles/index.scss';

import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.config.devtools = true

import App from './app/app.vue'
import store from '@/store/index'
import router from '@/route/index'

axios.defaults.transformRequest = [
    function (data) {
        return Qs.stringify(data)
    }
]

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

