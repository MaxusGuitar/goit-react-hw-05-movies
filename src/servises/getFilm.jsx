import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "8ae25731f6c7965e1e45ea675a13c63f";

export async function getTrend() {
  return await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export async function getMoveItem(movie_id) {
  return await axios.get(`${BASE_URL}/movie/${movie_id}y?api_key=${API_KEY}`);
}

export async function getMoveItemSearch(search_film) {
  return await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search_film}&include_adult=false`
  );
}

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
