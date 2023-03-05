const { Redis } = require('ioredis');
let redis = { set: () => { }, get: () => { } };
const DAY_IN_SECONDS = 24 * 60 * 60;

const initiateRedis = () => {
  try {
    redis = new Redis({
      password: 'hHgRxDLaMR8eUPk0mDDapovOHA2G7FGd',
      host: 'redis-12267.c305.ap-south-1-1.ec2.cloud.redislabs.com',
      port: 12267
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
