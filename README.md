# Koa Blueprint

Koa-based framework implementation for quick API bootstrapping.

## Quick Run

1. Copy `.env.example` to `.env` file and fill required env variable

2. Direct run app with npm

```
npm install

npx sequelize db:migrate

npm start
```

3. Or run app as docker container

```
docker-compose up

docker exec container-app npx sequelize db:migrate
```