<template>
  <div v-show="hideLogin">
    <LoginComponent @addProfile="addProfile" @showApp="showApp = true, hideLogin = false"/>
  </div>
  <div v-show="showApp">
    <body>
      <header class="p-4 position-fixed w-100 z-3 " id="header">
        <HeaderComponent @search="getMoviesAndSeries"/>
      </header>
      <div id="jumbotron">
        <!-- da rivedere
          <img :src="imageUrlBD + store.seriesList[0].backdrop_path" alt=""> 
        -->
      </div>
      <main id="main" >
        <div class="container">
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
      getPopular(){
        axios.get(store.popularUrl, {params: store.paramsPopular}).then((response)=>{
          console.log(response.data.results);
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
      }
    },
    created(){
      this.getPopular()
      this.getMoviesAndSeries()
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
}
#jumbotron{
  width: 100%;
  height: 100%;
  background-image: url(/images/arcane-netflix.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
#main{
  background-color: rgb(37, 37, 37);;
}
</style>