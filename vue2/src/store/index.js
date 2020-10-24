import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: {
      sender: '',
      content: '',
    },
  },
  mutations: {
    sendMessage(state, obj) {
      state.message = {
        sender: obj.sender,
        content: obj.content,
      }
    },
  },
  actions: {},
  modules: {},
})
