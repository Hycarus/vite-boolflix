<template>
    <div class="row">
        <CardComponent :url_immagine="element.poster_path" :titolo="element.title" :media_voti="element.media_voti" :titolo_originale="element.original_title" :lingua_originale="element.original_language" v-for="(element, index) in store.movieList" :key="index"/>
    </div>
</template>

<script>
    import {store} from '../data/store.js';
    import CardComponent from './main/CardComponent.vue'
    export default {
        name: 'MainComponent',
        components: {
            CardComponent
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