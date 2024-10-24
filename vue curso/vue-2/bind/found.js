const app = new Vue({
  el: '#app',
  data: {
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
    }

  }
})
