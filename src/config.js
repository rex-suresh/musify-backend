require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  api_domain: process.env.API_DOMAIN,
  image_domain: process.env.IMAGE_DOMAIN,
  api_key: process.env.API_KEY,
  redis_key: process.env.REDIS_KEY,
};
