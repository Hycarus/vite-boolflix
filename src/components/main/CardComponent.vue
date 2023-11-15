<template>
    <div class="card col-2">
        <img :src="store.imageUrl + url_immagine" class="card-img-top" :alt="titolo">
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
            titolo_originale: String,
            url_immagine: String,
            titolo: String,
            media_voti: Number,
            lingua_originale: String,
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