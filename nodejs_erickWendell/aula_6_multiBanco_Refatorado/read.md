<h1> Multi bank com docker e nodejs </h1>

<li> instalar o docker :

<h2>Comando Docker - Postgres</h2>

  docker run \
  --name postgres \
  -e POSTGRES_USER=User_postgres \
  -e POSTGRES_PASSWORD=senhaPostgres \
  -e POSTGRES_DB=Banco_name \
  -p 1234:1234  \
  -d \
  postgres

listar docker ps

<li> entrar no container comando

docker exec -it postgres /bin/bash

<li> fazendo cliente p/ usuario com interface bunitinha e configura porta:

docker run \
  --name adminer \
  -p 8080:8080 \
  --link postgres:postgres \
  -d \
  adminer

<h2> Docker Comander - MongoDb </h2>

docker run \
 --name mongodb \
 -p 27017:27017 \
 -e MONGO_INITDB_ROOT_USERNAME=admin \
 -e MONGO_INITDB_ROOT_PASSWORD=senha \
 -d \
  mongo:4

<li> fazendo cliente p/ usuario com interface bunitinha e configura porta:

docker run \
 --name monogoClient \
  -p 3000:3000 \
  --link mongodb:mongodb \
  -d \
  mongoClient / mongoClient

  <li> linha de comando

docker exec -it mongodb \
 mongo --host localhost -u admin -p senhaAdmin --authenticationDatabase admin \
--eval "db-getSiblingDB('herois').createUser({user:'usuario_1',pwd:'senhaUser',roles:[{role:'readWrite',db:'heroi'}]})"
