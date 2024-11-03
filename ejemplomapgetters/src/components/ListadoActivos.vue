<template>
  <div>
    <p>Listado de usuarios activos{{listadoactivos}}</p>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ListadoActivos',
  computed: mapGetters(["listadoactivos"]),
}
</script>
<style>
</style>