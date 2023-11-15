<template>
    <div class="card col-3">
        <img :src="store.imageUrl + url_immagine" class="card-img-top" :alt="titolo" v-if="url_immagine">
        <img src="/images/default.jpeg" alt="default" v-else>
        <div class="card-body">
            <h4 class="card-title">{{titolo}}</h4>
            <h6 class="card-title">Titolo originale: {{titolo_originale}}</h6>
            <p class="card-text">
                Voto: {{ media_voti }}
            </p>
            <h5 class="card-title">{{ lingua_originale }}</h5>
        </div>
    </div>
</template>

<script>
    import {store} from '../../data/store.js';
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
        },
        data(){
            return{
                store,
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>