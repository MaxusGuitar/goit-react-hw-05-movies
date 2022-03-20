import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "8ae25731f6c7965e1e45ea675a13c63f";

export async function getTrend() {
  return await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export async function getMoveItem(movie_id) {
  return await axios.get(`${BASE_URL}/movie/${movie_id}y?api_key=${API_KEY}`);
}
