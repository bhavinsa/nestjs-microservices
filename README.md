## Installation

```bash
$ git clone https://github.com/bhavinsa/nestjs-microservices.git
$ cd nestjs-microservices
```

## For application,  

```
$ cd application
$ npm install
$ npm run start

```
## For User microservices

```
$ cd user-microservices
$ npm install
$ npm run start

```
NOTE: We need to keep both application and user-microservices running.

Open this URL and check http://localhost:3002
This will return data from user-microservices.


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

