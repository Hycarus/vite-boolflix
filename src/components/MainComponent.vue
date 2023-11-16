<template>
    <section class="position-relative">
        <h2 class="text-light">Series</h2>
        <div class="row flex-nowrap overflow-hidden" ref="seriesSlider">
            <CardComponent
            :url_immagine="element.poster_path"
            :titolo="element.name"
            :media_voti="roundedVote(element.vote_average)"
            :titolo_originale="element.original_name"
            :lingua_originale="element.original_language"
            v-for="(element, index) in store.seriesList"
            :key="index"
            />
        </div>
        <div class="prev" @click="scrollSeries(0, -1100)"></div>
        <div class="next" @click="scrollSeries(0, 1100)"></div>
    </section>
    <section class="position-relative ">
        <h2 class="text-light">Movie</h2>
        <div class="row flex-nowrap overflow-hidden" ref="moviesSlider">
            <CardComponent
            :url_immagine="element.poster_path"
            :titolo="element.title"
            :media_voti="roundedVote(element.vote_average)"
            :titolo_originale="element.original_title"
            :lingua_originale="element.original_language"
            v-for="(element, index) in store.movieList"
            :key="index"/>
        </div>
        <div class="prev" @click="scrollMovie(0, -1100)"></div>
        <div class="next" @click="scrollMovie(0, 1100)"></div>
    </section>
    <section class="position-relative">
        <h2 class="text-light">Popular movies</h2>
        <div class="row flex-nowrap overflow-hidden" ref="popularMoviesSlider">
            <CardComponent
            :url_immagine="element.poster_path"
            :titolo="element.title"
            :media_voti="roundedVote(element.vote_average)"
            :titolo_originale="element.original_title"
            :lingua_originale="element.original_language"
            v-for="(element, index) in store.popularList"
            :key="index"
            />
        </div>
        <div class="prev" @click="scrollPopularMovies(0, -1100)"></div>
        <div class="next" @click="scrollPopularMovies(0, 1100)"></div>
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
            },
            scrollSeries(x, y) {
                const slider = this.$refs.seriesSlider
                slider.scrollBy({
                        top: x,
                        left: y,
                        behavior : "smooth"
                    });
            },
            scrollMovie(x, y) {
                const slider = this.$refs.moviesSlider
                slider.scrollBy({
                        top: x,
                        left: y,
                        behavior : "smooth"
                    });
            },
            scrollPopularMovies(x, y) {
                const slider = this.$refs.popularMoviesSlider
                slider.scrollBy({
                        top: x,
                        left: y,
                        behavior : "smooth"
                    });
            },
        },
    }
</script>

<style lang="scss" scoped>
.prev, .next {
    width: 30px;
    height: 30px;
    margin: 10px 0;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    left: 0;
    bottom: 50%;
    transform: translate(-50%);
    cursor: pointer;
    z-index: 999;
}
.next {
    left: 100%;
}
.prev::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    display: block;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%) rotate(-45deg);
}

.next::before {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    display: block;
    position: absolute;
    bottom: 35%;
    left: 50%;
    transform: translate(-50%) rotate(135deg);
}
</style>