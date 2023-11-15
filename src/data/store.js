import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    imageUrl: 'https://image.tmdb.org/t/p/w342',
    endPoint: {
        movie: 'search/movie',
        series: 'search/tv',
    },
    params:{
        api_key: '04b63a97f719edbe743291502d732b6d',
        query: '',
    },
    movieList: [],
    seriesList: [],
})