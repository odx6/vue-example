<template>
  <p>El valor de contador es </p>
   <ContadorPrue></ContadorPrue>
</template>

<script>
import ContadorPrue from './components/ContadorPrue'

export default {
  name: 'App',
  components: {
    ContadorPrue,
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
