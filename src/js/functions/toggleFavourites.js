export function addFavourites(movie) {
    const data = JSON.parse(localStorage.getItem('favourite'))??[]
    const isInStorage = data.find((value) => value.id === movie.id)
    if (isInStorage) {
        return
    }
    localStorage.setItem('favourite', JSON.stringify([...data, movie]))
}

export function getFavourites() {
    const data = JSON.parse(localStorage.getItem('favourite'))??[]
    return data
}