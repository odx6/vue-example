<template>
  <div>
     <ListadoActivos></ListadoActivos>
    <li v-bind:key="usuario.nombre" v-for="usuario in usuarios">
      {{ usuario.nombre }}
    </li>
     
  </div>
</template>

<script>
import { mapState} from 'vuex'
import ListadoActivos from './ListadoActivos'
export default {
  name: 'UsuariosPrue',
  components:{
    ListadoActivos,
  },
  computed: mapState(["usuarios"]),
}
</script>
<style>
</style>