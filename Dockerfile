FROM node:18.16.1-bookworm-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD [ "npm", "start" ]