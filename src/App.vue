<template>
  <div v-show="hideLogin">
    <LoginComponent @addProfile="addProfile" @showApp="showApp = true, hideLogin = false"/>
  </div>
  <div v-show="showApp">
    <body>
      <header class="px-4 position-fixed w-100" id="header">
        <HeaderComponent @search="getMoviesAndSeries" @genres-change="filterGenres"/>
      </header>
      <div id="jumbotron">
        <!-- da rivedere
          <img :src="imageUrlBD + store.seriesList[0].backdrop_path" alt=""> 
        -->
      </div>
      <main id="main" >
        <div class="container pb-5 ">
          <MainComponent/>
        </div>
      </main>
    </body>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue';
  import LoginComponent from './components/LoginComponent.vue';
  import MainComponent from './components/MainComponent.vue'
  import axios from 'axios';
  import {store} from './data/store.js';
  export default {
    name: 'App',
    components: {
    MainComponent,
    LoginComponent,
    HeaderComponent
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
          // console.log(response.data.results);
          store.movieList = response.data.results
        })
        const seriesUrl = store.apiUrl + store.endPoint.series
        axios.get(seriesUrl, {params: store.params}).then((response)=>{
          console.log(response.data.results);
          store.seriesList = response.data.results
        })
        store.params.query = '';
      },
      getPopular(){
        axios.get(store.popularUrl, {params: store.paramsPopular}).then((response)=>{
          // console.log(response.data.results);
          store.popularList = response.data.results
        })
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
      },
      getGenres() {
        const movieGenreUrl = store.apiUrl + store.genresEndPoint.movie;
        const serieGenreUrl = store.apiUrl + store.genresEndPoint.series;
        const apiUrl = `?api_key=${store.params.api_key}`

        Promise.all([axios.get(movieGenreUrl + apiUrl), axios.get(serieGenreUrl + apiUrl)])
          .then((results) => {
            const result0 = results[0].data.genres;
            const result1 = results[1].data.genres;

            for (let i = 0; i < result0.length; i++) {
              store.genresList.push(result0[i]);
            }

            for (let x = 0; x < result1.length; x++) {
              store.genresList.push(result1[x]);
            }

            store.genresList = store.genresList.filter(
              (genre, index, arr) =>
                index === arr.findIndex((g) => g.id === genre.id || g.name === genre.name)
            );
            console.log(store.genresList);
          })
      },
      filterGenres(){
      store.filteredGenre = [];
        if (store.genresSearch != "") {
          console.log(store.genresSearch);
          store.isFiltered = true;
          store.filteredGenre = store.genresList.filter((el) => el.id == store.genresSearch)
          console.log(store.filteredGenre);
        } else {
          store.isFiltered = false;
        }

      },
    },
    created(){
      this.getPopular()
      this.getMoviesAndSeries()
      this.getGenres()
    }
  }
</script>

<style lang="scss" scoped>
body{
  width: 100%;
  height: 100vh;
}
#header{
  background-color: rgba(0, 0, 0, 0.599);
  z-index: 1000;
}
#jumbotron{
  width: 100%;
  height: 100%;
  background-image: url(/images/arcane-netflix.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
#main{
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 58%, rgba(52,50,50,1) 100%);
}
</style>