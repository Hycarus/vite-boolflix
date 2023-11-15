<template>
    <section>
        <h2>Movie</h2>
        <div class="row">
            <CardComponent
            :url_immagine="element.poster_path"
            :titolo="element.title"
            :media_voti="roundedVote(element.vote_average)"
            :titolo_originale="element.original_title"
            :lingua_originale="element.original_language"
            v-for="(element, index) in store.movieList"
            :key="index"/>
        </div>
    </section>
    <section>
        <h2>Series</h2>
        <div class="row">
            <CardComponent
            :url_immagine="element.poster_path"
            :titolo="element.name"
            :media_voti="element.vote_average"
            :titolo_originale="element.original_name"
            :lingua_originale="element.original_language"
            v-for="(element, index) in store.seriesList"
            :key="index"
            />
        </div>
    </section>
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
        },
        methods: {
            roundedVote(vote){
                let newVote = vote / 2;
                let roundedVote = Math.round(newVote * 2) / 2;
                return roundedVote
      }
        }
    }
</script>

<style lang="scss" scoped>

</style>