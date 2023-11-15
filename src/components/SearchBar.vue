<template>
    <div class="input-group flex-nowrap">
        <input class="form-control" placeholder="Inserisci il film che vuoi cercare" type="text" v-model="store.params.query" @keyup.enter="$emit('search', textSearch)">
        <button class="btn btn-success" @click="$emit('search', textSearch)">Search</button>
    </div>
</template>

<script>
    import {store} from '../data/store.js';
    export default {
        name: 'SearchBar',
        data(){
            return{
                store,
                textSearch: '',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>