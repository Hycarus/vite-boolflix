<template>
    <div class="card col-2 p-0 border-0" @click="$emit('active'), $emit('prova'), addCredits(), stockObject(), store.showDetails = tipo_componente">
        <img :src="store.imageUrl + url_immagine" class="card-img-top h-100" :alt="titolo" v-if="url_immagine">
        <img  class="card-img-top" src="/images/default.jpeg" alt="default" v-else>
        <div class="card-body position-absolute">
            <h4 class="card-title d-none">{{titolo}}</h4>
        </div>
        <div id="triangolo" class="position-absolute"></div>
    </div>
</template>

<script>
    import {store} from '../../data/store.js';
    import axios from 'axios';
    export default {
        name: 'CardComponent',
        props:{
            titolo_originale: {
                type: String,
                required: true,
            },
            url_immagine: {
                type: String,
                required: false,
            },
            titolo: {
                type: String,
                required: true,
            },
            media_voti: {
                type: Number,
                required: false,
            },
            lingua_originale: {
                type: String,
                required: true,
            },
            riassunto: {
                type: String,
                required: true,
            },
            tipo_componente: {
                type: String,
            },
            genere: {
                type: Array,
                required: false,
            },
            id: {
                type: Number,
            },
            tipo: {
                type: String
            }
        },
        data(){
            return{
                store,
            }
        },
        methods:{
            stockObject(){
                const object = {
                    myOriginalTitle: this.titolo_originale,
                    myVote: this.media_voti,
                    myLanguage: this.lingua_originale,
                    myOverview: this.riassunto,
                    myGenre: this.genere,
                    myId: this.id,
                    myTipo: this.tipo
                    }
                console.log(object);
                if(this.tipo_componente === 'movies'){
                    store.movieObject = object
                }else if(this.tipo_componente === 'series'){
                    store.seriesObject = object
                }else if (this.tipo_componente === 'popular'){
                    store.popularObject = object
                }
            },
            addCredits(){
                // if (movie.cast && movie.cast.length > 0){
                //     return
                // }
                const endpoint = this.tipo + this.id + `/credits`;
                console.log(endpoint);
                const params = {
                    api_key: store.params.api_key
                }
                axios.get(store.apiUrl + endpoint, {params}).then((res)=>{
                    store.castList = []
                    for(let i = 0; i < 5; i++){
                        if(res.data.cast[i]){
                            store.castList.push(res.data.cast[i].name);
                        }
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
p{
    img{
        width: 24px;
    }
}
.card{
    color: white;
    margin: 0 10px !important;
    height: 350px;
    cursor: pointer;
    &:hover img{
        border: 5px solid white;
    } 
    &:hover{
        #triangolo{
            display: block !important;
        }
        
        .card-body{
            background-color: rgba(0, 0, 0, 0.317);
            border-radius: 20px;
            .card-title{
                display: block !important;
            }
        }
    }
}
.card-body{
    bottom: 0;
    margin: 5px;
}
div#triangolo {
    width: 0;
    height: 0;
    line-height: 0px;
    border-top: 20px solid white;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;
    display: none;
}
</style>