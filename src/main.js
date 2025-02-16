import { API_KEY } from "./keys.js";

const api = axios.create({
    baseURL: 'http://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
        'language': 'es',
    }
})

async function getTrendingMovies () {
    const {data} = await api('trending/movie/day')
    const movies = data.results;

    movies.forEach(movie => {
        const vistaPreviaMovies = document.querySelector('#movie-content-preview')

        const movieContenedor = document.createElement('div')
        movieContenedor.classList.add('card')

        const movieImg = document.createElement('img')
        movieImg.classList.add('card-content')
        movieImg.setAttribute('alt', movie.title)
        movieImg.setAttribute('src', 
            'https://image.tmdb.org/t/p/w300' 
            + movie.poster_path)

            movieContenedor.appendChild(movieImg)
            vistaPreviaMovies.appendChild(movieContenedor)
    });
}

async function getCategoriesMovies () {
    const {data} = await api('genre/movie/list')
    const categories = data.genres;
   
    categories.forEach(category => {
        const categoryView = document.querySelector('#category-container .categories-container')

        const categoryContenedor = document.createElement('div')
        categoryContenedor.classList.add('categories-container')

        const categoryTitle = document.createElement('h3')
        categoryTitle.setAttribute('id', category.name)
        const categoryTitleText = document.createTextNode(category.name)

       
        categoryTitle.appendChild(categoryTitleText)
        categoryContenedor.appendChild(categoryTitle)
        categoryView.appendChild(categoryContenedor)
    });
}


