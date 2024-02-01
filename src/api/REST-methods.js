const { default: axios } = require('axios');
const { saveToCache, getFromCache } = require('../redis/redis');
const { api_key } = require('../config');

const get = async (url) => axios.get(url, {
  headers: { 'apikey': api_key }
}).then((res) => {
  console.log("🚀 ~ get ~ res:", res.data);
  if (res.status === 200) {
    return res;
  }


  throw new Error(`Request failed with code ${res.status}`);
}).catch(error => {
  console.log("🚀 ~ get ~ res:", error);
  console.error(error.message);
});

const sendAndSave = (res, data, saveAs) => {
  saveToCache(saveAs, data);
  res.send(data);
};

const resolveRequest = async (res, url, mapper, requestUrl) => {
  const cachedResponse = await getFromCache(requestUrl);
  console.log("🚀 ~ resolveRequest ~ cachedResponse:", cachedResponse);

  if (cachedResponse) {
    res.json(cachedResponse);
    return;
  }

  await get(url).then((response) => {
    console.log("🚀 ~ get ~ response?.status:", response?.status);
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
