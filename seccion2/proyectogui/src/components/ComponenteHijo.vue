<template>
  <div>
   <h2>Soy el componente hijo </h2>
   <button  @click="emitirEvento">cerrar Hijo </button>

  </div>
</template>

<script>

export default {
  name: 'ComponenteHijo',
  methods:{
    emitirEvento(){

        this.$emit('cerrar')
    }
  }
 
  
}
</script >

<style>