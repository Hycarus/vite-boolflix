<template>
  <div class="container">
    <header>
      <SearchBar @search="getMoviesAndSeries"/>
    </header>
    <main>
      <MainComponent/>
    </main>
  </div>
</template>

<script>
  import MainComponent from './components/MainComponent.vue'
  import SearchBar from './components/SearchBar.vue'
  import axios from 'axios';
  import {store} from './data/store.js';
  export default {
    name: 'App',
    components: {
      SearchBar,
      MainComponent,
    },
    methods:{
      getMoviesAndSeries(){
        const movieUrl = store.apiUrl + store.endPoint.movie
        axios.get(movieUrl, {params: store.params}).then((response)=>{
          console.log(response.data.results);
          store.movieList = response.data.results
        })
        const seriesUrl = store.apiUrl + store.endPoint.series
        axios.get(seriesUrl, {params: store.params}).then((response)=>{
          console.log(response.data.results);
          store.seriesList = response.data.results
        })
        store.params.query = '';
      },
    },
    created(){
      
    }
  }
</script>

<style lang="scss" scoped>

</style>