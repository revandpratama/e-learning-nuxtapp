FROM node:18-alpine

WORKDIR /nuxt

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json /nuxt/

RUN npm install && npm cache clean --force

COPY . .

ENV PATH ./node_modules/.bin/:$PATH