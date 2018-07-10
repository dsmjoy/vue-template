import { requestUserInfo } from '../../services/user'

const state = {}

const mutations = {}

const actions = {
    fetchUserInfo ({commit}, payload) {
        return requestUserInfo(payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
