import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    imageUrl: 'https://image.tmdb.org/t/p/w342',
    popularUrl: 'https://api.themoviedb.org/3/movie/popular',
    endPoint: {
        movie: 'search/movie',
        series: 'search/tv',
    },
    paramsPopular: {
        api_key: '04b63a97f719edbe743291502d732b6d',
    },
    params:{
        api_key: '04b63a97f719edbe743291502d732b6d',
        query: 'star',
    },
    movieList: [],
    seriesList: [],
    popularList: [],
    profileList: [
        {
            id: 1,
            name: 'Mirko',
            profilePic: '/images/geralt-pic.jpeg',
            descriptionPic: 'geralt-pic',
            adult: true,
        },
        {  
            id:2,
            name: 'Bambini',
            profilePic: '/images/kid-pic.avif',
            descriptionPic: 'kid-pic',
            adult: false,
        }
    ],
    profileIndex: 0,
    imageUrlBD: 'https://image.tmdb.org/t/p/w1200',
    showMain: false,
    showDetails: null,
    movieObject: {},
    seriesObject: {},
    popularObject: {},
})