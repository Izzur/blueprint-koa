FROM node:12-alpine 

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install --production && npm cache clean --force --loglevel=error

COPY --chown=node:node index.js .
COPY --chown=node:node server.js .
COPY --chown=node:node src ./src/
COPY --chown=node:node .sequelizerc .

CMD [ "node", "index.js"]