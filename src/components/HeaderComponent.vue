<template>
    <header class="d-flex justify-content-between align-items-center" @click.self="store.isActive = false">
        <div>
            <nav class="navbar navbar-expand-lg">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center ">
                    <li class="nav-item">
                        <img src="/images/netflix-logo.png" alt="logo">
                    </li>
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
                    <li class="nav-item d-flex flex-column justify-content-center align-items-center ps-5">
                        <label class="text-light" for="genres">Seleziona un genere</label>
                        <select name="genres" id="genres" v-model="store.genresSearch" @change="$emit('genresChange')">
                            <option value="">All</option>
                            <option v-for="genres in store.genresList" :key="genres" :value="genres.id">
                                {{ genres.name }}
                            </option>
                        </select>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <i ref="icon" @click.stop="(store.isActive = !store.isActive)" :class="( store.isActive ? 'd-none' : 'd-inline-block')" class="fa-solid fa-magnifying-glass fs-5 text-light"></i>
            <input class="form-control" :class="(store.isActive ? 'd-inline-block bigger' : 'd-none')" placeholder="Inserisci il film/serie tv che vuoi cercare" type="text" v-model="store.params.query" @keyup.enter="$emit('search', textSearch), store.showMain = true, scrollPage(), store.isActive = !store.isActive">
            <button class="btn btn-danger mx-2" @click="$emit('search', textSearch), store.showMain = true, scrollPage()">Search</button>
            <div class="text-light text-center me-3">
                {{ store.profileList[store.profileIndex].name }}
            </div>
            <div>
                <img :src="store.profileList[store.profileIndex].profilePic" :alt="store.profileList[store.profileIndex].descriptionPic">
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
ul{
    li:first-child{
        margin-bottom: 10px;
    }
}
.user{
    width: 100px;
    height: 100px;
}
input{
    width: 250px;
    height: 30px;
    padding-bottom: 10px;
    background-color: black;
    border: 1px solid white;
    color: white;

    &::placeholder{
        color: grey !important;
        text-align: center;
        line-height: 30px;
    }
}
.bigger{
        animation-name: bigger;
        animation-duration: 0.4s;
    }
@keyframes bigger{
        0% {width: 0px;}
        100% {width: 250px;}
    }
select{
    border: none;
    border-radius: 10px;
    background-color: #dc3545;
    color: white;
    padding: 3px;
    cursor: pointer;
    
}

</style>