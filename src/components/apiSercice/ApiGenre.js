const axios = require('axios').default;


const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function getGenre() {
  const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const genreList = await axios.get(url);
  return genreList.data;
}

export default getGenre;