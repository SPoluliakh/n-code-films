export function createMurkUp(el) {
    const murkUp = el.map((value) => {
        return `<li class="movie-list__item" data-id="${value.id}">
                    <img src="https://image.tmdb.org/t/p/w400/${value.poster_path}" alt="Movie poster" class="movie-poster" data-id="${value.id}">
                    <div class="movie-list__description" data-id="${value.id}">
                        <h3 class="movie-title" data-id="${value.id}">${value.title}</h3>
                        <p class="movie-release" data-id="${value.id}">${value.release_date}<p>
                        <b class="movie-vote" data-id="${value.id}">${value.vote_average}</b>
                    </div>
                </li>`
    }).join('')
    return murkUp
}

export function createMovieInfoMurkUp(el) {
    return `
    <div>
        <div class="movie-info">
            <img src="https://image.tmdb.org/t/p/w400/${el.poster_path}" alt="Movie poster" class="movie-info__poster" width="200">
            <div class="movie-info__description">
                <div class="movie-info__view">
                    <h3 class="movie-info__title">${el.title}</h3>
                    <div class="movie-info__vote">${el.vote_average}</div>
                </div>
                <p class="movie-info__genres">${el.genres.map((genre) => genre.name).join('')}<p>
                <p class="movie-info__release">${el.release_date}<p>
                <p class="movie-info__overview">${el.overview}${el.overview}${el.overview}<p>
            </div>
            <button class="movie-info__cross">X</button>
        </div>
        <div class="button-container">
            <button class="movie-info__trailer">Watch trailers</button>
            <button class="movie-info__favourite">Add to favourite</button>
        </div>
    </div>`
}

export function createMovieTrailersMurkUp(key) {
     return `<iframe id="trailer" class="player" width="860px" height="660px" type="text/html" allowfullscreen="allowfullscreen"
             src="https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1"
             frameborder="0"></iframe>`
}

export function createListOfFavouriteFilms(arr) {
    const favouriteFilmsMurkUp = arr.map((value) => {
        return `<li class="movie-list__item" data-id="${value.id}">
                    <img src="https://image.tmdb.org/t/p/w400/${value.poster_path}" alt="Movie poster" class="movie-poster" data-id="${value.id}">
                    <div class="movie-list__description" data-id="${value.id}">
                        <h3 class="movie-title" data-id="${value.id}">${value.title}</h3>
                        <p class="movie-release" data-id="${value.id}">${value.release_date}<p>
                        <b class="movie-vote" data-id="${value.id}">${value.vote_average}</b>
                    </div>
                </li>`
    }).join('')
    return favouriteFilmsMurkUp
} 

// export function createMovieTrailersMurkUp(trailerResult) {
//     console.log(trailerResult)
//     const trailerMurkUp = trailerResult.map(({key}) => {
//         return `<iframe id="trailer" class="player" type="text/html" allowfullscreen="allowfullscreen"
//              src="https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1"
//              frameborder="0"></iframe>`
//     }).join('')
//     return trailerMurkUp
// }