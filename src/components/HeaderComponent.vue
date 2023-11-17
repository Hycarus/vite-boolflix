<template>
    <header class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center ">
            <img src="/images/netflix-logo.png" alt="logo">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-light" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Serie TV</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Film</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Nuovi e popolari</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">La mia lista</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Sfoglia per lingua</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div>
            <select name="genres" id="genres" v-model="store.genresSearch" @change="$emit('genresChange')">
                <option value="">All</option>
                <option v-for="genres in store.genresList" :key="genres" :value="genres.id">
                {{ genres.name }}
                </option>
            </select>
        </div>
        <div class="d-flex justify-content-evenly align-items-center">
            <div class="input-group w-50 flex-nowrap">
                <input class="form-control" placeholder="Inserisci il film/serie tv che vuoi cercare" type="text" v-model="store.params.query" @keyup.enter="$emit('search', textSearch), store.showMain = true, scrollPage()">
                <button class="btn btn-success" @click="$emit('search', textSearch), store.showMain = true, scrollPage()">Search</button>
            </div>
            <div class="user d-flex align-items-center">
                <div class="text-light text-center me-3">
                    {{ store.profileList[store.profileIndex].name }}
                </div>
                <div>
                    <img :src="store.profileList[store.profileIndex].profilePic" :alt="store.profileList[store.profileIndex].descriptionPic">
                </div>
                
            </div>
        </div>
        
    </header>
    
</template>

<script>
    import {store} from '../data/store.js';
    export default {
        name: 'HeaderComponent',
        components: {
        },
        data(){
            return{
                store,
                textSearch: '',
            }
        },
        methods:{
            scrollPage(){
                window.scrollBy({
                    top: 1000,
                    left: 0,
                    behavior: "smooth",
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
img{
    width: 70px;
    height: 70px;
}
.user{
    width: 100px;
    height: 100px;
}

</style>