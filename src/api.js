import axios from 'axios';

axios.defaults.baseURL = 'http://api.themoviedb.org/3/';

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
