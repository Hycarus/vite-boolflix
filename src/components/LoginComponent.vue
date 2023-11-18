<template>
    <body>
        <main class="container">
            <h1 class="text-light text-center">
                Chi vuole guardare Boolflix
            </h1>
            <section class="row justify-content-center ">
                <div class="user m-4 col-3 d-flex flex-column align-items-center" @click="$emit('showApp'), store.profileIndex = profile.id - 1, flag = true" v-for="(profile, index) in store.profileList" :key="index">
                    <div class="user-image">
                        <img class="w-100" :src="profile.profilePic" :alt="profile.descriptionPic">
                    </div>
                    <div class="my-text-color mt-2">{{profile.name}}</div>
                </div>
                <div class="user m-4 col-3 d-flex flex-column align-items-center">
                    <button class="btn p-0" @click="showPopup = true">
                        <div class="user-image">
                            <i class="fa-solid fa-circle-plus my-text-color"></i>
                        </div>
                        <div class="my-text-color mt-2">Aggiungi un profilo</div>
                    </button>
                </div>
                <div class="sfondo" v-show="showPopup === true">
                    <div class="my-popup position-absolute" >
                        <form>
                            <div class="mb-1">
                                <label for="name-profile" class="form-label text-light">Nome profilo</label>
                                <input type="text" class="form-control" id="name-profile" v-model="name">
                            </div>
                            <button type="button" class="btn btn-primary mt-2 " @click="$emit('addProfile', name), showPopup = false, name = ''">
                                Aggiungi
                            </button>
                            <button type="button" class="btn btn-danger mt-2 mx-3" @click="showPopup = false">
                                Indietro
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </body>
</template>

<script>
    import {store} from '../data/store.js'
    export default {
        name: 'LoginComponent',
        
        data(){
            return{
                store,
                showPopup: false,
                name: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;
body{
    width: 100%;
    height: 100vh;
    background-color: rgb(37, 37, 37);
}
h1{
    padding-top: 200px;
    font-size: 5em;
}
.user{
    width: 200px;
    height: 200px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
}
.user-image{
    width: 150px;
    height: 150px;
    
}
img{
    border-radius: 10px;
    
}
i{
    font-size: 150px;
}
.my-text-color{
    color: $my_text_color;
}
.my-popup{
    width: 300px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.sfondo{
    background-color: rgba(0, 0, 0, 0.592);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>