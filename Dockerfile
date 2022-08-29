FROM node:lts-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .

RUN yarn cache clean --force
RUN yarn install
RUN yarn run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

EXPOSE 80

ENTRYPOINT ["node", ".output/server/index.mjs"]