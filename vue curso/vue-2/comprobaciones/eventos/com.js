const app = new Vue({
    el: '#main',
    data: {
        tarea: null,
        tareas: [
            { titulo:'tarea 1' ,Estado:false},
            { titulo:'Tomar 2' ,Estado:true},
            { titulo:'Caminar 3' ,Estado:false},
            { titulo:'Descansar 4' ,Estado:true},
            { titulo:'Correr 5' ,Estado:false},
            { titulo:'Tomar jugo 6' ,Estado:false},
        ]
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift({titulo:this.tarea, Estado:false})
        },


    },
    computed:{
        mostrarCompletadas(){
            return this.tareas.filter(item=>item.Estado)
        },
        mostrarPorTitulo(){

            return this.tareas.filter(item=>item.titulo.includes(this.tarea))
        }
    }

})