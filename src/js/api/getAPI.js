import axios from "axios";

const API_KEY = 'a138d9c2ec5bee6878c1acf4eaa23bdd';
const API_URL = 'https://api.themoviedb.org/3/';

export async function getPopularMovies(page = 1) {
    const parameters = 'movie/popular';
    const options = new URLSearchParams({
        api_key: API_KEY,
        page,
        language: 'en-US',
    });
    return axios.get(`${API_URL}${parameters}?${options}`);
};

export async function getMovieById(id) {
    const parameters = `movie/${id}`;
    const options = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
    })
    return axios.get(`${API_URL}${parameters}?${options}`);
}

export async function getMovieTrailer(id) {
    const parameters = `movie/${id}/videos`
    const options = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-us',
    })
    return axios.get(`${API_URL}${parameters}?${options}`)
}