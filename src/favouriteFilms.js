import { addMurkUp, addMovieInfoMurkUp, addTrailersMurkUp } from "./js/functions/addMurkUp";
import { getMovieById, getMovieTrailer } from "./js/api/getAPI";
import { addFavourites } from "./js/functions/toggleFavourites";
import { getFavourites } from "./js/functions/toggleFavourites";
import { listOfFavouriteFilms } from "./js/refs"

const favouriteMoviesResult = getFavourites()
console.log(listOfFavouriteFilms)

addMurkUp(listOfFavouriteFilms, favouriteMoviesResult)
listOfFavouriteFilms.addEventListener('click', (event) => {
    if(event.target.classList.contains('movie-list')) return;
    getMovieById(event.target.dataset.id).then((data) => {
        addMovieInfoMurkUp(movieInfo, data.data)
        backdropWrapper.classList.remove('is-hidden')
        document.querySelector('.movie-info__cross')?.addEventListener('click', () => {
            backdropWrapper.classList.add('is-hidden')
        })
        document.querySelector('.movie-info__favourite').addEventListener('click', (event) => {
            addFavourites(data.data)
        })        
        if (data.data.vote_average <= 5) {
            document.querySelector('.movie-info__vote').classList.add('is-red')
        }
        if (data.data.vote_average > 5 && data.data.vote_average <= 7) {
            document.querySelector('.movie-info__vote').classList.add('is-yellow')
        }
        if (data.data.vote_average > 7) {
            document.querySelector('.movie-info__vote').classList.add('is-green')
        }
        document.querySelector('.movie-info__trailer').addEventListener('click', () => {
            modalTrailer.classList.remove('is-hidden');                 
            getMovieTrailer(data.data.id).then((data) => {
                addTrailersMurkUp(modalTrailer, data.data.results[0].key)           
            })                   
        })     
    })
})