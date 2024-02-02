const { default: axios } = require('axios');
const { saveToCache, getFromCache } = require('../redis/redis');
const { api_key } = require('../config');

const get = async (url) => {
  const urlWithKey = new URL(url);

  urlWithKey.searchParams.set('apikey', api_key);

  return axios.get(urlWithKey, {
    headers: { 'apikey': api_key }
  }).then((res) => {
    if (res.status === 200) {
      return res;
    }

    throw new Error(`Request failed with code ${res.status}`);
  }).catch(error => {
    // eslint-disable-next-line no-console
    console.error(error.message);
  });
};

const sendAndSave = (res, data, saveAs) => {
  saveToCache(saveAs, data);
  res.send(data);
};

const resolveRequest = async (res, url, mapper, requestUrl) => {
  const cachedResponse = await getFromCache(requestUrl);

  if (cachedResponse) {
    res.json(cachedResponse);
    return;
  }

  await get(url).then((response) => {
    if (response?.status === 200) {
      const downStreamData = mapper(response.data);
      sendAndSave(res, downStreamData, requestUrl);
      return;
    }
    res.status(504);
  });
};

const requestFor = async (url, mapper) =>
  get(url).then((response) => {
    return response?.status === 200 ? mapper(response.data) : [];
  });

module.exports = { get, resolveRequest, requestFor };
