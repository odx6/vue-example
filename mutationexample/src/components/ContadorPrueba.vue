<template>
  <div >
    <h1>Vuex mutations</h1>
   <p>  contador {{contador}}</p>
   <button @click="aumentar">Aumentar</button>
   <button @click="reducir">reducir</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    
  name: 'ContadorPrueba',
  computed:mapState(['contador']),
  methods:{
    aumentar(){
     // this.$store.state.contador++
     this.$store.commit('aumentar')
    },
    reducir(){
      //this.$store.state.contador--
      this.$store.commit('reducir')
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
