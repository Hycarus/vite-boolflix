<template>
  <div v-show="hideLogin === true">
    <LoginComponent @addProfile="addProfile" @showApp="showApp = true, hideLogin = false"/>
  </div>
  <div class="container" v-show="showApp === true">
    <header>
      <SearchBar @search="getMoviesAndSeries"/>
    </header>
    <main>
      <MainComponent/>
    </main>
  </div>
</template>

<script>
  import LoginComponent from './components/LoginComponent.vue';
  import MainComponent from './components/MainComponent.vue'
  import SearchBar from './components/SearchBar.vue'
  import axios from 'axios';
  import {store} from './data/store.js';
  export default {
    name: 'App',
    components: {
      SearchBar,
      MainComponent,
      LoginComponent,
    },
    data(){
      return{
        showApp: false,
        hideLogin: true,
      }
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
      
      addProfile(name){
        if(name.trim() !== ''){
            store.profileList.push({
                id: store.profileList.length + 1,
                name: name,
                profilePic: '/images/default-profile-pic.jpeg'
            })
            console.log(store.profileList);
        }
      }
    },
    created(){
      
    }
  }
</script>

<style lang="scss" scoped>

</style>