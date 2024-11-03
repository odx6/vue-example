<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <UsuariosPrue></UsuariosPrue>
  

  </div>
</template>

<script>

import UsuariosPrue from './components/UsuariosPrue'



export default {
  name: 'App',
  components: {
    UsuariosPrue,
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
