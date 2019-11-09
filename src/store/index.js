import Vue from 'vue'
import Vuex from 'vuex'
import contentModule from './contentModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    content: contentModule
  }
})
