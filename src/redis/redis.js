const { Redis } = require('ioredis');
const { redis_domain, redis_key } = require('../config');
let redis = { set: () => { }, get: () => { } };

const DAY_IN_SECONDS = 24 * 60 * 60;

const initiateRedis = () => {
  try {
    redis = new Redis({
      password: redis_key,
      host: redis_domain,
      port: 12267 // default port for redis db
    });
  } catch (error) {
    console.warn('Unable to connect to redis');
  }
};

const saveToCache = async (requestUrl, data) => {
  try {
    redis.set(requestUrl, JSON.stringify(data), 'EX', DAY_IN_SECONDS);
  } catch (error) {
    console.warn(`Unable to set ${requestUrl} cache`);
  }
};

const getFromCache = async (requestUrl) => {
  try {
    const value = await new Promise((resolve, reject) => {
      redis.get(requestUrl, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });

    return JSON.parse(value);
  } catch (error) {
    console.warn(`Unable to get ${requestUrl} from cache`);
  }
};

module.exports = { saveToCache, getFromCache, initiateRedis };
