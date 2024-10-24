<template>
  <div>
    <p>Nombre: {{nombre}}</p>
    <p>Edad: {{edad}} </p>
  

  </div>
</template>

<script>

export default {
  name: 'MiHijo',
  props:['nombre','edad'],
  
}
</script >

<style>