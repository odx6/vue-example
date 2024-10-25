<template>
  <div>
   <button @click="mostrar=true">Mostrar Hijo </button>
 <ComponenteHijo @cerrar="mostrar=false" v-show="mostrar"></ComponenteHijo>
  </div>
</template>

<script>
import ComponenteHijo from "./ComponenteHijo"

export default {
  name: 'ComponentePadre',
  components:{
    ComponenteHijo,
  },
  data(){

    return {
      mostrar:false,
    }
  }
 
  
}
</script >
