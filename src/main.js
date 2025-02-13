import { API_KEY } from "./keys"

const url = 'http://api.themoviedb.org/3/trending/movie/day'

async function getTrendingMovies () {
    const res = await fetch(`${url}?api_key=${API_KEY}`)
    const data = await res.json()

    const movies = data.results;
	console.log(data, movies);
}

getTrendingMovies()