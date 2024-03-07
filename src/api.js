import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: '46c0be6b49bf7596a38fb0fb781b3647',
};

export const fetchTrendingMovie = async () => {
  const response = await axios.get('trending/movie/day');

  return response.data;
};

export const searchMovie = async query => {
  const response = await axios.get(`search/movie?query=${query}`);

  return response.data;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(`movie/${id}`);

  return response.data;
};

export const fetchCastMovie = async id => {
  const response = await axios.get(`movie/${id}/credits`);

  return response.data;
};

export const fetchReviewsMovie = async id => {
  const response = await axios.get(`movie/${id}/reviews`);

  return response.data;
};
