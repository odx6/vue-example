<template>
  <div>
    <h1>El nom,bre es : {{nombre}}</h1>
    <h1>La edad es : {{edad}} </h1>
    <MiHijo v-bind:nombre="nombre" v-bind:edad="edad"></MiHijo>

  </div>
</template>

<script>
import MiHijo from "./MiHijo"
export default {
  name: 'MiPersona',
  props:['nombre','edad'],
  components:{
    MiHijo,
  },
}
</script >

<style>
</style>
