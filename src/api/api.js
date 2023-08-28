import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "32689c8e33692abcd6644328b1e41161";
export const imageUrl='https://image.tmdb.org/t/p/original'

const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
    return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`)
}

export const fetchVideoData = (id) => {
    return axios.get(`${URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
}