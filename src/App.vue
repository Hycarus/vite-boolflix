<template>
  <div v-show="hideLogin">
    <LoginComponent @addProfile="addProfile" @showApp="splash = true, hideLogin = false, splashDisappear()"/>
  </div>
  <div v-show="splash">
    <div class="video-container overflow-hidden ">
        <video class="video" ref="video">
            <source src="/images/logo-video.mp4">
        </video>
    </div>
  </div>
  <div v-show="showApp">
    <body>
      <header class="px-4 position-fixed w-100" id="header">
        <HeaderComponent @search="getMoviesAndSeries" @genres-change="filterGenres"/>
      </header>
      <div id="jumbotron">
        <div class="video-container position-relative ">
          <iframe class="trailer-video" :src="store.videoLink" frameborder="0">
          </iframe>
          <div class="position-absolute black-square1"></div>
          <div class="position-absolute black-square2"></div>
          <div class="position-absolute black-square3"></div>
        </div>
      </div>
      <main id="main">
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
    HeaderComponent,
},
    data(){
      return{
        store,
        showApp: false,
        hideLogin: true,
        splash: false,
      }
    },
    methods:{
      getMoviesAndSeries(){
        store.movieList = [];
        store.seriesList = [];
        store.movieIdList = [];
        store.seriesIdList = [];
        const movieUrl = store.apiUrl + store.endPoint.movie
        axios.get(movieUrl, {params: store.params}).then((response)=>{
          // console.log(response.data.results);
          store.movieList = response.data.results
          for(let i = 0; i < response.data.results.length; i++){
            for(let a = 0; a < response.data.results[i].genre_ids.length; a++){
              store.movieIdList.push(response.data.results[i].genre_ids[a])
            }
          }
          // console.log(store.movieList);
          // console.log(store.movieIdList);
        })
        const seriesUrl = store.apiUrl + store.endPoint.series
        axios.get(seriesUrl, {params: store.params}).then((response)=>{
          // console.log(response.data.results);
          store.seriesList = response.data.results
          for(let i = 0; i < response.data.results.length; i++){
            for(let a = 0; a < response.data.results[i].genre_ids.length; a++){
              store.seriesIdList.push(response.data.results[i].genre_ids[a])
            }
          }
          // console.log(store.seriesList);
        })
        store.params.query = '';
      },
      getPopular(){
        axios.get(store.popularUrl, {params: store.paramsPopular}).then((response)=>{
          // console.log(response.data.results);
          store.popularList = response.data.results
          for(let i = 0; i < response.data.results.length; i++){
            for(let a = 0; a < response.data.results[i].genre_ids.length; a++){
              store.popularIdList.push(response.data.results[i].genre_ids[a])
            }
          }
          // console.log(store.popularList);
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
            // console.log(store.genresList);
          })
      },
      filterGenres(){
      store.filteredGenre = [];
        if (store.genresSearch != "") {
          store.isFiltered = true;
          store.filteredGenre = store.genresList.filter((el) => el.id == store.genresSearch)
          console.log(store.filteredGenre);
        } else {
          store.isFiltered = false;
        }
      },
      splashDisappear(){
        this.$refs.video.play()
        setTimeout(()=>{
          this.splash = false
          this.showApp = true
        }, 4300)
      },
      startVideos(){
        const url = store.apiUrl + store.videosParams.series + `94605` + `/videos`
        console.log(url);
        axios.get(url, {params: store.paramsPopular}).then((response)=>{
          console.log(response.data.results);
          store.videoLink = store.youtubeUrl + response.data.results[4].key + `?version=3&playlist=` + response.data.results[4].key + store.finalVideoUrl
          console.log(store.videoLink);
        })
      },
    },
    created(){
      this.getPopular()
      this.getMoviesAndSeries()
      this.getGenres()
      this.startVideos()
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

#main{
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 58%, rgba(52,50,50,1) 100%);
}
.video-container{
    width: 100%;
    height: 100vh;
    .video{
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    .trailer-video{
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
}
.black-square1{
  background-color: black;
  width: 1000px;
  height: 50px;
  z-index: 500;
  top: 0;
  left: 0;
}
.black-square2{
  background-color: black;
  width: 350px;
  height: 50px;
  z-index: 500;
  bottom: 0;
  right: 0;
}
.black-square3{
  background-color: black;
  width: 350px;
  height: 70px;
  z-index: 500;
  top: 0;
  right: 0;
}

</style>