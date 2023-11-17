<template>
    <section class="position-relative py-2 ">
        <h2 class="text-light">Series</h2>
        <div class="prev" @click="scrollSeries(0, -1120)"></div>
        <div class="next" @click="scrollSeries(0, 1120)"></div>
        <div class="row flex-nowrap custom-scrollbar" ref="seriesSlider" id="prova">
            <CardComponent
            tipo_componente="series"
            :genere="element.genre_ids"
            :riassunto="element.overview"
            :url_immagine="element.poster_path"
            :titolo="element.name"
            :media_voti="roundedVote(element.vote_average)"
            :titolo_originale="element.original_name"
            :lingua_originale="element.original_language"
            v-for="(element, index) in store.seriesList"
            :key="index"
            />
        </div>
        <div v-show="store.showDetails === 'series'" class="my-padding-bottom">
            <HiddenComponent @active="takeSeriesObject"
            :genere="store.seriesObject.myGenre"
            :titolo_originale="store.seriesObject.myOriginalTitle"
            :media_voti="store.seriesObject.myVote"
            :lingua_originale="store.seriesObject.myLanguage"
            :riassunto="store.seriesObject.myOverview"
            />
        </div>
    </section>
    <section class="position-relative py-2 ">
        <h2 class="text-light">Movie</h2>
        <div class="row flex-nowrap overflow-hidden" ref="moviesSlider">
            <CardComponent
            tipo_componente="movies"
            :genere="element.genre_ids"
            :riassunto="element.overview"
            :url_immagine="element.poster_path"
            :titolo="element.title"
            :media_voti="roundedVote(element.vote_average)"
            :titolo_originale="element.original_title"
            :lingua_originale="element.original_language"
            v-for="(element, index) in store.movieList"
            :key="index"/>
        </div>
        <div v-show="store.showDetails === 'movies'" class="my-padding-bottom">
            <HiddenComponent @active="takeMovieObject"
            :genere="store.movieObject.myGenre"
            :titolo_originale="store.movieObject.myOriginalTitle"
            :media_voti="store.movieObject.myVote"
            :lingua_originale="store.movieObject.myLanguage"
            :riassunto="store.movieObject.myOverview"
            />
        </div>
        <div class="prev" @click="scrollMovie(0, -1120)"></div>
        <div class="next" @click="scrollMovie(0, 1120)"></div>
    </section>
    <section class="position-relative py-2 ">
        <h2 class="text-light">Popular movies</h2>
        <div class="row flex-nowrap overflow-hidden" ref="popularMoviesSlider">
            <CardComponent
            tipo_componente="popular"
            :genere="element.genre_ids"
            :riassunto="element.overview"
            :url_immagine="element.poster_path"
            :titolo="element.title"
            :media_voti="roundedVote(element.vote_average)"
            :titolo_originale="element.original_title"
            :lingua_originale="element.original_language"
            v-for="(element, index) in store.popularList"
            :key="index"
            />
        </div>
        <div v-show="store.showDetails === 'popular'" class="my-padding-bottom">
            <HiddenComponent @active="takePopularObject"
            :genere="store.popularObject.myGenre"
            :titolo_originale="store.popularObject.myOriginalTitle"
            :media_voti="store.popularObject.myVote"
            :lingua_originale="store.popularObject.myLanguage"
            :riassunto="store.popularObject.myOverview"
            />
        </div>
        <div class="prev" @click="scrollPopularMovies(0, -1120)"></div>
        <div class="next" @click="scrollPopularMovies(0, 1120)"></div>
    </section>
    
</template>

<script>
    import HiddenComponent from './HiddenComponent.vue';
    import {store} from '../data/store.js';
    import CardComponent from './main/CardComponent.vue'
    export default {
        name: 'MainComponent',
        components: {
            CardComponent,
            HiddenComponent,
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
            takeMovieObject(){
                return store.movieObject
            },
            takeSeriesObject(){
                return store.seriesObject
            },
            takePopularObject(){
                return store.popularObject
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
    left: -30px;
    bottom: 50%;
    // transform: translate(-50%);
    cursor: pointer;
    z-index: 999;
    // margin-left: 10px;
}
.next {
    left: 100%;
    margin-left: 0;
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

.my-padding-bottom{
    padding-bottom: 350px;
}
#prova{
    overflow-x: scroll;
}
.custom-scrollbar::-webkit-scrollbar{
    width: 1px;
    height: 1px;
}
.custom-scrollbar::-webkit-scrollbar-track{
    background: #555999;
    border-radius: 1px;
}
.custom-scrollbar::-webkit-scrollbar-thumb{
    background: rgba(255, 255, 255, 0.5);
    border-radius: 1px;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
}
</style>