const { default: axios } = require('axios');
require('dotenv').config();

const get = async (url) => axios.get(url, {
  headers: { apikey: process.env.API_KEY }
}).then((res) => {
  if (res.status === 200) {
    return res;
  }

  throw new Error(`Request failed with code ${res.status}`);
}).catch(error => {
  console.warn(error.message);
});

const resolveRequest = (res, url, mapper) => {
  get(url).then((response) => {
    if (response?.status === 200) {
      res.send(mapper(response.data));
      return;
    }
    res.status(504);
  });
};

module.exports = { get, resolveRequest };
