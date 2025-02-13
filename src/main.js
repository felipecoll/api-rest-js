
// import { API_KEY } from "./keys.js"
const url = 'http://api.themoviedb.org/3/trending/movie/day'

async function getTrendingMovies () {
    const res = await fetch(`${url}?api_key=`+''+'&language=es')
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

getTrendingMovies()