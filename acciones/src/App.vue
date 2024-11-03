<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HomePrueba>  </HomePrueba>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomePrueba from './components/HomePrueba'

export default {
  name: 'App',
  components: {
    HelloWorld,HomePrueba
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
