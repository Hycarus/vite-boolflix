<template>
    <div class="position-relative">
        
        <div class="position-absolute my-hidden rounded rounded-2 p-2 ">
            <div class="position-absolute my-xmark px-2 " @click="store.showDetails = false">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <h6 class="card-title">Titolo originale: {{titolo_originale}}</h6>
            <p class="card-text">
                Voto:
                <i :class="{'fa-solid fa-star-half-stroke': media_voti > 0 && media_voti < 1,'fa-solid fa-star': media_voti > 0, 'fa-regular fa-star': media_voti === 0}"></i>
                <i :class="{'fa-solid fa-star-half-stroke': media_voti > 1 && media_voti < 2,'fa-solid fa-star': media_voti > 1, 'fa-regular fa-star': media_voti < 2}"></i>
                <i :class="{'fa-solid fa-star-half-stroke': media_voti > 2 && media_voti < 3,'fa-solid fa-star': media_voti > 2, 'fa-regular fa-star': media_voti < 3}"></i>
                <i :class="{'fa-solid fa-star-half-stroke': media_voti > 3 && media_voti < 4,'fa-solid fa-star': media_voti > 3, 'fa-regular fa-star': media_voti < 4}"></i>
                <i :class="{'fa-solid fa-star-half-stroke': media_voti > 4 && media_voti < 5,'fa-solid fa-star': media_voti > 4, 'fa-regular fa-star': media_voti < 5}"></i>
                 {{ media_voti }}
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
                <img src="/images/flag-of-south-korea.gif" alt="korean flag"> 
            </p>
            <p v-else-if="lingua_originale === 'ro'">
                Lingua:
                <img src="/images/romanian-flag.gif" alt="romanian flag"> 
            </p>
            <h5 v-else class="card-title">Lingua: {{ lingua_originale }}</h5>
            <div class="pt-2 pb-1">
                <h5>Riassunto:</h5>
                <span>{{ riassunto }}</span>
            </div>
            <div class="pt-2 pb-1">
                <h5>Generi:</h5>
                <span class="px-1" v-for="item in genere">{{ getGenreName(item) }} </span>
            </div>
            <div class="pt-2">
                <h5>Cast:</h5>
                <span class="px-1" v-for="actor in store.castList"> {{ actor }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store.js';
    export default {
        name: 'HiddenComponent',
        props:{
            titolo_originale: {
                type: String,
                required: false,
            },
            media_voti: {
                type: Number,
                required: false,
            },
            lingua_originale: {
                type: String,
                required: false,
            },
            riassunto: {
                type: String,
                required: false,
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
        methods: {
            getGenreName(id) {
                const finder = store.genresList.find((el) => el.id == id)
                if (finder) {
                    return finder.name;
                }
            },
            
            
        }
    }
</script>
<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;
p{
    img{
        width: 24px;
    }
}
.my-hidden{
    display: inline-block;
    z-index: 2000;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 58%, rgba(52,50,50,1) 100%);
    color: $my_text_color;
}
.my-xmark{
    right:0;
    top:0;
    font-size: 30px;
    color: $my_text_color;
    cursor: pointer;
}
</style>