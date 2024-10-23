const app = new Vue({
    el: '#main',
    data: {
        tarea: null,
        tareas: [
            'aprende Es6',
            'Descansar ',
            'jugar al futball',
            'Programar un rato ',
            'practicar ingles',
            'Tomar 2 lt de agua',
        ]
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift(this.tarea)
        }


    }

})