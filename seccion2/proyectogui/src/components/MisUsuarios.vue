<template>
  <div>
    <p>nombre: {{nombre}}</p>
    <p>email :{{email}}</p>
    <p>Telefono : {{telefono}}</p>
  
  <hr>

  </div>
</template>

<script>

export default {
  name: 'MisUsuarios',
  props:{
    nombre:String,
    email:String,
    telefono:String,
  }
  
}
</script >

<style>