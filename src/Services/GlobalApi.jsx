import axios from "axios";
// https://api.themoviedb.org/3/movie/157336?api_key=cf1fc1fb2b67970eee4b32c5410d9891&append_to_response=videos
const moiveBaseUrl = "https://api.themoviedb.org/3"
const api_key = "cf1fc1fb2b67970eee4b32c5410d9891"
const getTrendingVideo = axios.get(moiveBaseUrl+"/trending/all/day?api_key="+api_key);

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=cf1fc1fb2b67970eee4b32c5410d9891';
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+"&with_genres="+id)
export default { getTrendingVideo,getMovieByGenreId };