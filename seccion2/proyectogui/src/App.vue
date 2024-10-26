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

      <ComponenteSlot>
      Hola como estas modificando desde el slot
      <template slot="slotdos">
      Hola desde app slot 2
      </template>
      <template slot="slottres">
      Hola desde app slot 3
      </template>
      </ComponenteSlot>
      <ComponentePadre></ComponentePadre>
      <MiElemento tipo="h1">Texto para el elemento h1</MiElemento>
      <MiElemento tipo="h2">Texto para el elemento h2</MiElemento>
      <MiElemento tipo="h3">Texto para el elemento h3</MiElemento>
      <MiElemento tipo="aside">Contenido aside </MiElemento>
      

    

  </div>
</template>

<script>
import MiSaludo from "./components/MiSaludo";
import ComponenteDos from "./components/ComponenteDos";
import MiPersona from "./components/MiPersona";
import MisUsuarios from "./components/MisUsuarios";
import ComponenteSlot from "./components/ComponenteSlot";
import ComponentePadre from "./components/ComponentePadre";
import MiElemento from "./components/MiElemento";
import axios from 'axios'

export default {
  name: "App",
  components: {
    MiSaludo,
    ComponenteDos,
    MiPersona,
    MisUsuarios,
    ComponenteSlot,
    ComponentePadre,
    MiElemento,
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
