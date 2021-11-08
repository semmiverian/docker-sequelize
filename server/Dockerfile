FROM node:16-alpine

WORKDIR /usr/local/application

RUN apk add --no-cache tini

COPY package.json package-lock.json* yarn.lock* ./

RUN npm install -g nodemon

RUN chown -R node:node .

# RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apk add --no-cache bash

USER node

RUN npm install && npm cache clean --force

WORKDIR /usr/local/application/code

COPY . .

ENTRYPOINT [ "/sbin/tini", "--" ]

CMD ["node", "app.js"]