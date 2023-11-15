<template>
  <div class="container">
    <header>
      <SearchBar @search="getSeries(), getMovies()"/>
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
      getMovies(){
        const url = store.apiUrl + store.endPoint.movie
        axios.get(url, {params: store.params}).then((response)=>{
          console.log(response.data.results);
          store.movieList = response.data.results
        })
        store.params.query = '';
      },
      getSeries(){
        const url = store.apiUrl + store.endPoint.series
        axios.get(url, {params: store.params}).then((response)=>{
          console.log(response.data.results);
          store.seriesList = response.data.results
        })
        store.params.query = '';
      }
    },
    created(){
      
    }
  }
</script>

<style lang="scss" scoped>

</style>