const puente = new Vue({
    
    data: {
       datoGenerico:'este dato es compartido'
    }

})
const app = new Vue({
    el: '#main',
    data: {
        titulo: 'Titulo app 1',
        dato: 35,
        datoGene:puente.datoGenerico
    }

})
const app2 = new Vue({
    el: '#app2',
    data: {
        titulo: 'Titulo app 2',
        dato: 12,
        datoGene:puente.datoGenerico

    }

})