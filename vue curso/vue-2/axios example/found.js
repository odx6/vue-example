const app = new Vue({
  el: '#app',
  data: {
    personas:[]

  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
     console.log(response)
     this.personas=response.data
    })
  },
})
