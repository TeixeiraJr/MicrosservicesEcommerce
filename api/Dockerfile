FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build && npm run migration
COPY .env ./dist/
WORKDIR /usr/app/dist

EXPOSE 3333

CMD node index.js