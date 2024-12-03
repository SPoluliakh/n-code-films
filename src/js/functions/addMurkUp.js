import { createMovieInfoMurkUp, createMovieTrailersMurkUp, createListOfFavouriteFilms, createMurkUp } from "./createMurkUp"

export function addMurkUp(div, el) {
    console.log(div, el)
    const result = createMurkUp(el)
    div.insertAdjacentHTML('beforeend', result)
   
}

export function addMovieInfoMurkUp(div, el) {
    const result = createMovieInfoMurkUp(el)
    div.innerHTML = result
}

export function addTrailersMurkUp(div, key) {
    const result = createMovieTrailersMurkUp(key)
    div.innerHTML = result
}

export function addListOfFavouriteFilms(div, arr) {
    const result = createListOfFavouriteFilms(arr)
    div.innerHTML = result
}