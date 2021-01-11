/* Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
Servendoci di Vue JS stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
Chiamata: https://flynn.boolean.careers/exercises/api/array/music */
let root = new Vue({
    el: "#root",
    data:{
        albums:[],
    },
    methods:{

    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
            for (let i = 0; i < response.data.response.length; i++) {
                this.albums.push(response.data.response[i]);  
            }    
        })
    }
})