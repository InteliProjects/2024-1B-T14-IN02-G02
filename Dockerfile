FROM node:20.14.0

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 1337

CMD [ "npm", "run", "start" ]