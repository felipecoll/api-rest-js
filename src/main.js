const apiKey = 'bd61a77539c783064932957b78bd4755'
const url = 'http://api.themoviedb.org/3/trending/movie/day'

async function getTrendingMovies () {
    const res = await fetch(`${url}?api_key=${apiKey}`)
    const data = await res.json()

    const movies = data.results;
	console.log(movies);
}

getTrendingMovies()