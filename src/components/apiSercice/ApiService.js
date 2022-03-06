import PropTypes from 'prop-types';
const axios = require('axios').default;


const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function ApiPopular() {
  const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const imagesList = await axios.get(url);
  return imagesList.data;
}


export default ApiPopular;

ApiPopular.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
