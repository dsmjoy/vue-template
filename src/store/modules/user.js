import { requestUserInfo } from '../../services/user'

const state = {}

const mutations = {}

const actions = {
    fetchUserInfo ({commit}, payload) {
        return requestUserInfo(payload)
    }
}

export default {
    namespace: true,
    state,
    mutations,
    actions
}
