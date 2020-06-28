FROM node:12-alpine 

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install --production && npm cache clean --force --loglevel=error

COPY --chown=node:node index.js .
COPY --chown=node:node server.js .
COPY --chown=node:node api ./api/
COPY --chown=node:node config ./config/
COPY --chown=node:node db ./db/
COPY --chown=node:node middleware ./middleware/
COPY --chown=node:node utils ./utils/

CMD [ "node", "index.js"]