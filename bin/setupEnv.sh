#! /bin/bash

touch .env

read -p "Do you wish to generate env? : (y/n) " prompt

if [[ "${prompt}" != "y" ]]
then
  exit 0
fi


echo 'PORT="4000"' > .env
echo 'API_DOMAIN="https://api.napster.com/v2.2"' >> .env
echo 'IMAGE_DOMAIN="https://api.napster.com/imageserver/v2"' >> .env
echo 'API_KEY=""' >> .env
echo 'REDIS_DOMAIN=""' >> .env # public endpoint
echo 'REDIS_KEY=""' >> .env
echo 'REDIS_PORT=""' >> .env

echo -e "\033[1;46m Added .env to project, Configure api and redis keys \033[0m"
