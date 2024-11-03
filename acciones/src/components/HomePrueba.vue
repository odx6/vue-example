<template>
  <div>
    <h1>Actions con Vuex</h1>
    <p>Las mutaciones las ocupamos para simples modificaciones del estado</p>
    <p>Accions las emplearemos cuando tengamos que realizar modificaciones asincronas</p>
    <ul>
      <li v-bind:key="usuario.id" v-for="usuario in usuarios">
        {{ usuario.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HomePrueba",
  computed: {
    ...mapState(["usuarios"]),
  },
  methods: {
    ...mapActions(["getusuarios"]),
  },
  mounted() {
    this.getusuarios();
  },
}
</script>
<style>
</style>
