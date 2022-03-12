import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "8ae25731f6c7965e1e45ea675a13c63f";

const getTrend = (pictureName, page) => {
  return axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`).data;
};
export default getTrend;
