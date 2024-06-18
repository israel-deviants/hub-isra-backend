## Description

This is a backend project made using NestJS framweork, some important dependencies are:

- TypeORM
- JWT
- Ethers

It returns a JWT token fom a wallet signature at POST /auth, this token is needed for future calls. Then it stores NFT projects in a Postgres database

The JWT Token is then used to obtain the wallet from it, the data of the Projects is stored associated to the Wallet Address obtained from this token. Some endpoints may include a wallet but this is not taken into account when storing and retrieving the data.


## Installation

```bash
Replace the .env file with the correct vars provided by email/telegram

$ npm install
```

### Database Migrations
I have provided a publica Postgres database, but in case you want to use a fresh database, you need to run migrations

```bash
$ npm run migration:run
```

## Testing and Lint

It includes very basic generated tests, all of them check if the classes are building properly but no specific functionalities due to my time availavility. 

```bash
$ npm run tests
```

It also has linting. I have included Husky hooks to run pre-commit lint and tests, if the process fails, the commit is rejected

E2E Tests

It has a basic e2e test that only checks if the root is returning "Hello World!", it can be extended to any funcionality from here.


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

It's configured for port 3001 http://localhost:3001

I have enabled CORS for all origins, to allow easier test at this point.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```