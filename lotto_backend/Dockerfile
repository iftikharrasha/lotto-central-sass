FROM node:16-alpine

WORKDIR /app

COPY ./package.json .

RUN apk --no-cache add curl

EXPOSE 3000

RUN npm i

COPY . .

CMD [ "node","app.js" ]