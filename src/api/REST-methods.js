require('dotenv').config();
const { default: axios } = require('axios');
const { saveToCache, getFromCache } = require('../redis/redis');

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

const resolveRequest = async (res, url, mapper, requestUrl) => {
  const cachedResponse = await getFromCache(requestUrl);

  if (cachedResponse) {
    res.json(cachedResponse);
    return;
  }

  get(url).then((response) => {
    if (response?.status === 200) {
      const downStreamData = mapper(response.data);
      saveToCache(requestUrl, downStreamData);
      res.send(downStreamData);
      return;
    }
    res.status(504);
  });
};

module.exports = { get, resolveRequest };
