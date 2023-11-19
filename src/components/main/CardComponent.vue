<template>
    <div class="card col-2 p-0 border-0" @click="$emit('active'), addCredits(), stockObject(), store.showDetails = tipo_componente, store.activeCard = this.id, activeFlag = !activeFlag" :class="{'activeCard': isActive()}">
        <img :src="store.imageUrl + url_immagine" class="card-img-top h-100" :alt="titolo" v-if="url_immagine">
        <img  class="card-img-top" src="/images/default.jpeg" alt="default" v-else>
        <div class="card-body position-absolute">
            <h4 class="card-title d-none">{{titolo}}</h4>
        </div>
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
                activeFlag: false,
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
                // console.log(object);
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
                // console.log(endpoint);
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
            isActive(){
                if(this.activeFlag){
                    return this.id === store.activeCard ? true : false
                }
            }
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
    // height: 350px;
    aspect-ratio: 2 / 3;
    cursor: pointer;
    &:hover img{
        border: 5px solid white;
    } 
    &:hover{
        .card-body{
            background-color: rgba(0, 0, 0, 0.317);
            border-radius: 20px;
            .card-title{
                display: block !important;
            }
        }
    }
}
.activeCard{
    border: 5px solid white !important;
}
.card-body{
    bottom: 0;
    margin: 5px;
}
</style>