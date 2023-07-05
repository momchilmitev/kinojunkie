FROM node:18.16.1-bookworm-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]