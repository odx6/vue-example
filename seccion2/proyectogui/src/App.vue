<template>
  <div>
    <MiSaludo></MiSaludo>
    <ComponenteDos ></ComponenteDos>
    <h3>Personas</h3>
     <MiPersona nombre="mabuel" edad="25" ></MiPersona>
     <hr>
     <MiPersona nombre="Ever" edad="30"></MiPersona>

  </div>
</template>

<script>
import MiSaludo from "./components/MiSaludo";
import ComponenteDos from "./components/ComponenteDos";
import MiPersona from "./components/MiPersona";

export default {
  name: "App",
  components: {
    MiSaludo,
    ComponenteDos,
    MiPersona,
  },
};
</script>

<style>
</style>
