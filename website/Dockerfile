FROM node:13.7 as node

ARG VERSION='No Version Specified' 
ENV VERSION=${VERSION}
ENV NPM_CONFIG_REGISTRY=https://nexus.blitzm.io/repository/npm/

WORKDIR /build

COPY ./babel.config.js ./babel.config.js
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./.postcssrc ./.postcssrc
COPY ./tsconfig.json ./tsconfig.json

RUN npm install
COPY ./codegen ./codegen
COPY ./public ./public
COPY ./src ./src

RUN npm run build

FROM nginx

COPY --from=node ./build/dist /usr/share/nginx/html