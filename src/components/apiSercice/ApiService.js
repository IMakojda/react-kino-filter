import PropTypes from 'prop-types';
const axios = require('axios').default;
// import React,{Component} from 'react';

const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';
async function ApiImages(searchQuery, page) {


  const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`;
  const imagesList = await axios.get(url);
  return imagesList.data;
}


export default ApiImages;

ApiImages.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
