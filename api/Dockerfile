FROM node:13.7

ENV NPM_CONFIG_REGISTRY=https://nexus.blitzm.io/repository/npm/

COPY ./nest-cli.json ./nest-cli.json
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./tsconfig-build.json ./tsconfig-build.json
COPY ./tsconfig.json ./tsconfig.json

RUN npm install
COPY ./src ./src
RUN npm run build

CMD ["npm", "run", "serve"]
