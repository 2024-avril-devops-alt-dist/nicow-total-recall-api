# Total Recall API

## Description
This project is an API using NextJS with Typescript on a MangoDB database. Everything is dockerized.
To launch the project on your local network, follow the next steps.

## How to start the project
First, create .env `cp .env.dist .env`  
Then, start container : `docker compose up --build -d`  
Push your db schema & generate prisma client : `docker compose exec app npx prisma db push && npx prisma generate`  
When started, you can see your page [here](http://localhost:3000/)  
You can see your db content with prisma studio : `npx prisma studio`

## Commands
Tag (_in container app_) means you have to enter in app container before doing the command.
- Enter app container : `docker compose exec app sh`  
- Exit container : `exit`  
- Push db schema (_in container app_) : `npx prisma db push`
- Generate prisma client (_in container app_) : `npx prisma generate`
- Seeding (_in container app_) : `npm run seed`
- Prisma studio : `npx prisma studio`

## How to use the API
TODO : Swagger

## Test
When I have time, I will add test documentation here.

## Pipeline
If I have enough time, I will add pipelines documentation here.

## How I made this project
- `npx create-next-app@latest`
- Dockerize with Dockerfile & docker-compose.yml
- - Dockerfile needs install of prisma globally in it
- - Dockerfile needs prisma generate
- `npm install prisma typescript ts-node @types/node esbuild --save-dev`
- Put this in script : 
```json
{
  "scripts": {
    "seed": "esbuild prisma/seed.ts --outfile=node_modules/tmp-seed.cjs --bundle --format=cjs --external:prisma --external:@prisma/client && node node_modules/tmp-seed.cjs --preview-feature"
  }
}
```