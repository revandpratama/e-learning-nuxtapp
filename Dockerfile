FROM node:18-alpine

WORKDIR /e-learning-nuxtapp

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json /e-learning-nuxtapp/

RUN npm install && npm cache clean --force

COPY . .

ENV PATH ./node_modules/.bin/:$PATH