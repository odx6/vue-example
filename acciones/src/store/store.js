import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: null
  },
  getters: {
  },
  mutations: {
    //modifican el estado
    obtenerUsuarios(state) {
      axios.get('https://jsonplaceholder.typicode.com/users').then(r => { state.usuarios = r.data })
    }
  },
  actions: {
    //no modifican los estados 
    getusuarios(context){
      context.commit('obtenerUsuarios')
    }
  },
  modules: {

  }
})
