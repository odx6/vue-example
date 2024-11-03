<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{ this.$store.state.nombre }}</p>
    <p>{{ nombre }}</p>
    <p>{{ edad }}</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  computed:mapState(['nombre','edad']),
  

};
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
