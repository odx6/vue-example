const app = new Vue({
  el: '#app',
  data: {
    mostrar:false,
    tareas: [
      { titulo: 'Titulo tarea 2', completado: false },
      { titulo: 'Titulo tarea 1', completado: false },
      { titulo: 'Titulo tarea 3', completado: false },
      { titulo: 'Titulo tarea 4', completado: false },

    ]
  },
  methods: {
    completarTarea(item) {
      item.completado = !item.completado
    },
    btnMostrar(){
      this.mostrar=!this.mostrar
      console.log(this.mostrar)
    }

  }
})
