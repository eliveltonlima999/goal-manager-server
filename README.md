# Gerenciador de metas - Server

O projeto é um site desktop de registro de metas com progresso semanal.

Este repositório contém o código fonte do servidor/API da aplicação.

### Instalar bibliotecas:

### 1. Instale o docker: (Caso não possua.):
[Docker](https://www.docker.com/)

### 2. Inicializando containers
Entre na pasta raiz do projeto, rode o comando:
```
docker-compose up -D
```

### 3. Instale as bibliotecas
Na pasta raiz do projeto, rode o comando:
```
npm i
```

### 4. Realize as migrations
Realize as migrations para criar as tabelas no banco de dados, utilize:
```
npx drizzle-kit migrate
```

### 5. Realize inserts
Realize insert de dados iniciais no banco de dados, para isso rode comando:
```
npm run seed
```

### 6. Inicie a aplicação
Para inicar, utilize:
```
npm run dev
```

### Após criar novas tabelas
Ao criar novas tabelas, deve-ser criar as migrations delas primeiro, e para isso utilize:
```
npx drizzle-kit generate
```

### Formatação
A formatação e estilo de código foram feitos com [Biome](https://biomejs.dev/pt-br/).

![Stacks](https://skillicons.dev/icons?i=postgres,docker,nodejs,ts,git,github&theme=dark)


### Links
[DrizzleORM](https://orm.drizzle.team/)

[Fastify](https://fastify.dev/)

[Day.js](https://day.js.org/)

[PostgreSQL](https://www.postgresql.org/)

[Figma - Projeto](https://www.figma.com/design/RKkxHEWy634ZEYBzjZEU1n/NLW-Pocket-JS-%E2%80%A2-in.orbit-(Community)?node-id=83-5&node-type=frame&t=Uev1mlGRsv4wZfif-0)

[Web/Frontend](https://github.com/eliveltonlima999/goal-manager-web)