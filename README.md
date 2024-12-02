# Total Recall API

## Description
This project is an API using NextJS with Typescript on a MongoDB database. Everything is dockerized.
To launch the project on your local network, follow the next steps.

## How to start the project
First, create .env `cp .env.dist .env`  
Then, start container : `docker compose up --build -d`  
Push your db schema & generate services client : `docker compose exec app npx services db push && npx services generate`  
When started, you can see your page [here](http://localhost:3000/)  
You can see your db content with services studio : `npx services studio`

## Commands
- Enter in app container : `docker compose exec app sh`
- Enter mongo shell : `docker compose exec mongo mongosh`
- Exit container : `exit`

The following commands needs to be run **_in app container_** :

- Push db schema : `npx services db push`
- Generate services client : `npx services generate`
- Seeding : `npm run seed`
- Prisma studio : `npx services studio`
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
TODO : Swagger

## Test
When I have time, I will add test documentation here.

## Pipeline
If I have enough time, I will add pipelines documentation here.

## How I made this project
- `npx create-next-app@latest`
- Dockerize with Dockerfile & docker-compose.yml
- - Dockerfile needs install of services globally in it
- - Dockerfile needs services generate
- `npm install services typescript ts-node @types/node zod esbuild next-auth@beta --save-dev`
- Put this in script (see more [here](https://github.com/prisma/prisma/issues/7053)) : 
```json
{
  "scripts": {
    "seed": "esbuild services/seed.ts --outfile=node_modules/tmp-seed.cjs --bundle --format=cjs --external:services --external:@services/client && node node_modules/tmp-seed.cjs --preview-feature"
  }
}
```
- Push schema to db
- Generate services client (refresh)
- Enable replica in mongo shell
- Push seed & see the result on services studio !

## Links

- [Schema](https://laconsole.dev/formations/prisma/prisma-schema#relations)
- [API route](https://corbado.com/blog/nextjs-prisma)
- [Doc Prisma for queries](https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting)