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
            <p v-if="lingua_originale === 'en'">
                Lingua:
                <img src="/images/british-flag-12.gif" alt="british flag"> 
            </p>
            <p v-else-if="lingua_originale === 'it'">
                Lingua:
                <img src="/images/italian-flag-9.gif" alt="italian flag"> 
            </p>
            <p v-else-if="lingua_originale === 'de'">
                Lingua:
                <img src="/images/german-flag-3.gif" alt="german flag"> 
            </p>
            <p v-else-if="lingua_originale === 'es'">
                Lingua:
                <img src="/images/spanish-flag-17.gif" alt="spanish flag"> 
            </p>
            <p v-else-if="lingua_originale === 'fr'">
                Lingua:
                <img src="/images/france-flag.gif" alt="france flag"> 
            </p>
            <p v-else-if="lingua_originale === 'ja'">
                Lingua:
                <img src="/images/japanese-flag-28.gif" alt="japanese flag"> 
            </p>
            <p v-else-if="lingua_originale === 'cn' || lingua_originale === 'zh'">
                Lingua:
                <img src="/images/chinese-flag-11.gif" alt="chinese flag"> 
            </p>
            <p v-else-if="lingua_originale === 'da'">
                Lingua:
                <img src="/images/denmark-3-transparent-flag.gif" alt="denmark flag"> 
            </p>
            <p v-else-if="lingua_originale === 'cs'">
                Lingua:
                <img src="/images/czech-flag.gif" alt="czech flag"> 
            </p>
            <p v-else-if="lingua_originale === 'sv'">
                Lingua:
                <img src="/images/elsalvador-flag.webp" alt="elsalvador flag"> 
            </p>
            <p v-else-if="lingua_originale === 'hi' || lingua_originale === 'kn'">
                Lingua:
                <img src="/images/indian-flag-15.gif" alt="indian flag"> 
            </p>
            <p v-else-if="lingua_originale === 'ko'">
                Lingua:
                <img src="/images/flag_of_South_Korea.gif" alt="korean flag"> 
            </p>
            <p v-else-if="lingua_originale === 'ro'">
                Lingua:
                <img src="/images/romanian-flag.gif" alt="romanian flag"> 
            </p>
            <h5 v-else class="card-title">Lingua: {{ lingua_originale }}</h5>
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
p{
    img{
        width: 24px;
    }
}
</style>