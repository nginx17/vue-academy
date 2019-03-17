import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: {},
    userList: []
  },
  mutations: {
    setUsers(state, data) {
      state.users = data
    },
    setUserList(state, data) {
      state.userList = data
    }
  },
  actions: {

  }
})
