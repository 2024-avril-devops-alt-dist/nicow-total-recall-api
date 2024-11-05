# Total Recall API

## Description
This project is an API using NextJS with Typescript on a MangoDB database. Everything is dockerized.
To launch the project on your local network, follow the next steps.

## How to start the project
First, create .env `cp .env.dist .env`  
Then, start container : `docker compose up --build -d`  
When started, you can see your page [here](http://localhost:3000/)

## Commands
- Enter app container : `docker compose exec app sh`  
- Exit container : `exit`  
- Push db schema (_in container app_) : `npx prisma db push`
- Generate prisma client (_in container app_) : `npx prisma generate`
- Prisma studio : `npx prisma studio`

## How to use the API
TODO : Swagger

## Test
When I have time, I will add test documentation here.

## Pipeline
If I have enough time, I will add pipelines documentation here.

## How I made this project
- `npx create-next-app@latest`
- dockerize with Dockerfile & docker-compose.yml
- - Dockerfile needs install of prisma globally in it
- - Dockerfile needs prisma generate
- `npm install prisma typescript ts-node @types/node --save-dev`