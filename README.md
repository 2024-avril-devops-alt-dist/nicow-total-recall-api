# Total Recall API

## Description
Hello ! 👋\
This project is an API using NextJS & Prisma with Typescript & a MongoDB database.\
_Everything is dockerized._\
To launch the project on your local network, follow the next steps.

## How to start the project
First, create .env and .env.local `cp .env.dist .env && cp .env.local.dist .env.local`\
***Don't forget to add env variables in !*** Mongo is set by default, but not the other.\
Then, start container : `docker compose up --build -d`\
***On the first time you install the project***, run : `./setup.sh` to init replica & fixtures\
When started, you can see your page [here](http://localhost:3000/)\
You can see your db content with prisma studio : `npm run studio`, then go [here](http://localhost:5555/)\
*or with `docker compose exec app npx prisma studio` if you don't want to install npm* 😁

## Commands
Some basics, but useful :
- Enter in app container : `docker compose exec app sh`
- Enter mongo shell : `docker compose exec mongo mongosh`
- Exit container : `exit`

The following commands needs to be run **_in app container_** :

- Push db schema : `npx prisma db push`
- Generate prisma client : `npx prisma generate`
- Seeding : `npm run seed`
- Prisma studio : `npx prisma studio`
- Reset db schema and push seed : `npm run resetdb`

The following commands needs to be run **_in mongo shell_** : \
*only the first time, and only if you don't use setup.sh !*

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
*This config is a very, **very** simplified version of the documentation [here](https://www.mongodb.com/docs/manual/tutorial/deploy-replica-set/)*

## How to use the API
See swagger doc on HomePage !\
You need to authenticate with Google account, or with the following credentials to have access on protected routes :

- **email** : admin@default.com
- **password** : default_password

*It's a school project, nothing important will be in the database, now or in the future of this project.*

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
- Add dynamics routes
- Add auth.js with Google provider and credentials auth
- Add swagger documentation (thanks postman for doing all the job)

## Links

- [Schema](https://laconsole.dev/formations/prisma/prisma-schema#relations)
- [API route](https://corbado.com/blog/nextjs-prisma)
- [Doc Prisma for queries](https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting)
- [Auth.js](https://www.youtube.com/watch?v=Rs8018RO5YQ)