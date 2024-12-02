FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
RUN npm install -g services

COPY . .

RUN npx services generate

EXPOSE 3000

CMD ["npm", "run", "dev"]