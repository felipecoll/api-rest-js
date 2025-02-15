window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
    console.log({location})
    
    if (location.hash.startsWith('#trends')) {
        trends()
    }else if(location.hash.startsWith('#search=')) {
        search()
    }else if(location.hash.startsWith('#movie=')) {
        movies()
    }else if(location.hash.startsWith('#category=')) {
        categories()
    } else {
        homePage()
    }

    location.hash
}

function trends() {
    console.log('Trends!')
}
function search() {
    console.log('Search!')
}
function movies() {
    console.log('Movies!')
}
function categories() {
    console.log('Categories!')
}
function homePage() {
    getTrendingMovies()
    getCategoriesMovies()
}