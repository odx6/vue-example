import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios:[
      {nombre:'manuel',edad:37,activo:false},
      {nombre:'marta',edad:27,activo:false},
      {nombre:'tomas',edad:17,activo:false},
      {nombre:'jose',edad:38,activo:false},
      {nombre:'ramiro',edad:39,activo:false},
      {nombre:'juan',edad:57,activo:false},
      {nombre:'ernesto',edad:67,activo:false},
      {nombre:'carlos',edad:77,activo:true},
    ]
  },
  getters: {
    listadoactivos:(state)=>{
      return state.usuarios.filter(usuario=>usuario.activo).length
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
