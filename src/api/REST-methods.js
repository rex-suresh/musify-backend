const { default: axios } = require('axios');
require('dotenv').config();

const get = (url) => {
  return axios.get(url, {
    headers: { apikey: process.env.API_KEY }
  }).catch(err => {
    console.warn('Failed to load' + url);
    console.warn(err.message);
  });
};

module.exports = { get };
