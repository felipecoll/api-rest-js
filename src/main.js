
// import { API_KEY } from "./keys.js"
// url para peliculas
const url_movies = 'http://api.themoviedb.org/3/trending/movie/day'

// url para categorias 
const url_categories = 'http://api.themoviedb.org/3/genre/movie/list'

// Obtenemos las pelicuas en carteleria en idioma es
async function getTrendingMovies () {
    const res = await fetch(`${url_movies}?api_key=`+''+'&language=es')
    const data = await res.json()

    const movies = data.results;
	//console.log(data, movies);

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

// Obtenemos las categorias de las peliculas 

async function getCategoriesMovies () {
    const res = await fetch(`${url_categories}?api_key=`+'')
    const data = await res.json()

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


// Llamada a funciones para su ejecucion
getTrendingMovies()
getCategoriesMovies()