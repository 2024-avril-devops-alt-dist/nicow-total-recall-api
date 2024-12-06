# Total Recall API

## Description
This project is an API using NextJS with Typescript on a MongoDB database. Everything is dockerized.
To launch the project on your local network, follow the next steps.

## How to start the project
First, create .env `cp .env.dist .env` and complete values with your own
Then, start container : `docker compose up --build -d`  
Push your db schema & generate prisma client : `docker compose exec app npx prisma db push && npx prisma generate`  
*ONLY THE FIRST TIME YOU INSTALL THE PROJECT*, you need to initialize replica : `./setup.sh`
When started, you can see your page [here](http://localhost:3000/)  
You can see your db content with prisma studio : `npx prisma studio`, then [here](http://localhost:5555/)

## Commands
- Enter in app container : `docker compose exec app sh`
- Enter mongo shell : `docker compose exec mongo mongosh`
- Exit container : `exit`

The following commands needs to be run **_in app container_** :

- Push db schema : `npx prisma db push`
- Generate prisma client : `npx prisma generate`
- Seeding : `npm run seed`
- Prisma studio : `npx prisma studio`
- Reset db schema and push seed : `npm run resetdb`

The following commands needs to be run **_in mongo shell_** :

- Enable replica : `rs.initiate();`
- Verify replica status : `rs.status();`
- If rs.conf() not valid : _(**TODO :** make a script for that later)_
```js
rs.reconfig({
  _id: 'rs0',
  members: [
    { _id: 0, host: 'mongo:27017' }
  ]
}, { force: true });
```
*This reconfig is a simplified version of the documentation [here](https://www.mongodb.com/docs/manual/tutorial/deploy-replica-set/)*

## How to use the API
See swagger doc on HomePage !
You need to authenticate with Google account, or create one on the website.

## Test
When I have time, I will add test documentation here.

## Pipeline
If I have enough time, I will add pipelines documentation here.

## How I made this project
- `npx create-next-app@latest`
- Dockerize with Dockerfile & docker-compose.yml
- - Dockerfile needs install of prisma globally in it
- - Dockerfile needs prisma generate
- `npm i prisma typescript ts-node @types/node zod esbuild next-auth@beta swagger-ui-react @types/swagger-ui-react next-swagger-doc --save-dev`
- Put this in script (see more [here](https://github.com/prisma/prisma/issues/7053)) : 
```json
{
  "scripts": {
    "seed": "esbuild prisma/seed.ts --outfile=node_modules/tmp-seed.cjs --bundle --format=cjs --external:prisma --external:@prisma/client && node node_modules/tmp-seed.cjs --preview-feature"
  }
}
```
- Push schema to db
- Generate prisma client (refresh)
- Enable replica in mongo shell
- Push seed & see the result on prisma studio !

## Links

- [Schema](https://laconsole.dev/formations/prisma/prisma-schema#relations)
- [API route](https://corbado.com/blog/nextjs-prisma)
- [Doc Prisma for queries](https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting)
- [Auth.js](https://www.youtube.com/watch?v=Rs8018RO5YQ)