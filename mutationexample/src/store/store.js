import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador:5,
  },
  getters: {
  },
  mutations: {
    aumentar:state=>state.contador++,
    reducir:state=>state.contador--,
  },
  actions: {
  },
  modules: {
  }
})
