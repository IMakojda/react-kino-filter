import PropTypes from 'prop-types';
const axios = require('axios').default;


const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function ApiSearchByIds(id) {
  const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${id}`;
  const imagesList = await axios.get(url);
  return imagesList.data;
}


export default ApiSearchByIds;

ApiSearchByIds.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
// https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id