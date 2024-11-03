<template>
  <div id="app">
   <ContadorPrueba></ContadorPrueba>
  </div>
</template>

<script>
import ContadorPrueba from './components/ContadorPrueba'


export default {
  name: 'App',
  components: {
    ContadorPrueba,

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
