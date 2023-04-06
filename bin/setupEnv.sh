#! /bin/bash

touch .env

echo 'PORT="4000"' > .env
echo 'API_DOMAIN="https://api.napster.com/v2.2"' >> .env
echo 'IMAGE_DOMAIN="https://api.napster.com/imageserver/v2"' >> .env
echo 'REDIS_DOMAIN="redis-12267.c305.ap-south-1-1.ec2.cloud.redislabs.com"' >> .env # public endpoint
echo 'API_KEY=""' >> .env
echo 'REDIS_KEY=""' >> .env

echo -e "\033[1;46m Added .env to project, Configure api and redis keys \033[0m"
