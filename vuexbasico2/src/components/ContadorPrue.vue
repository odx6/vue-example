<template>
  <div>
    <p>El valor del contador es {{ this.$store.state.contador }}</p>
    <button @click="Sumar">Sumar</button>
    <button @click="Restar">Restar</button>
  </div>
</template>

<script>
import { store } from "../store/store";
export default {
  name: "ContadorPrue",
  store,
  methods: {
    Sumar() {
      this.$store.commit("sumar");
    },
    Restar() {
      this.$store.commit("restar");
    },
  },
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