const { Redis } = require('ioredis');
const { redis_domain, redis_key, redis_port } = require('../config');
let redis = { set: () => { }, get: () => { } };

const DAY_IN_SECONDS = 24 * 60 * 60;

// eslint-disable-next-line no-console
const warn = (message) => console.warn(message);

const initiateRedis = () => {
  try {
    redis = new Redis({
      password: redis_key,
      host: redis_domain,
      port: Number(redis_port)
    });
  } catch (error) {
    warn('Unable to connect to redis');
  }
};

const saveToCache = async (requestUrl, data) => {
  try {
    redis.set(requestUrl, JSON.stringify(data), 'EX', DAY_IN_SECONDS);
  } catch (error) {
    warn(`Unable to set ${requestUrl} cache`);
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
    warn(`Unable to get ${requestUrl} from cache`);
  }
};

module.exports = { saveToCache, getFromCache, initiateRedis };
