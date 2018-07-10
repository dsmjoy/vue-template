
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// modules
import user from './modules/user'

const store = new Vuex.Store({
    state: {
        isLogin: false
    },

    mutations: {
        updateLoginStatus (state, payload) {
            state.isLogin = payload.isLogin
        }
    },

    modules: {
        user
    },
    strict: process.env.NODE_ENV !== 'production'
})

export default store
