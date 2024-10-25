<template>
  <div>
    <MiSaludo></MiSaludo>
    <ComponenteDos ></ComponenteDos>
    <h3>Personas</h3>
     <MiPersona nombre="mabuel" edad="25" ></MiPersona>
     <hr>
     <MiPersona nombre="Ever" edad="30"></MiPersona>
      <MisUsuarios  v-for="usuario in usuarios" v-bind:key="usuario.id" :nombre="usuario.name" :email="usuario.email" :telefono="usuario.phone"></MisUsuarios>
      <hr>
    

  </div>
</template>

<script>
import MiSaludo from "./components/MiSaludo";
import ComponenteDos from "./components/ComponenteDos";
import MiPersona from "./components/MiPersona";
import MisUsuarios from "./components/MisUsuarios";
import axios from 'axios'

export default {
  name: "App",
  components: {
    MiSaludo,
    ComponenteDos,
    MiPersona,
    MisUsuarios,
  },
  data(){

    return{
      usuarios:[],
    }
  }, 
  methods:{
    optenerUsuarios(){
      axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>this.usuarios=response.data)
    }
  },
  mounted(){
    this.optenerUsuarios()
  }
};
</script>

<style>
</style>
