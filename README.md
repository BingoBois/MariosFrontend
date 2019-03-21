# Mario Frontend
Made by Viktor Kim Christiasen, William Pfaffe & Chris Rosendorf


Stack used: `NodeJS / Typescript / React / Jest / Puppeteer / Docker`


## Run With Docker
2 Dockerfiles are available, one for running the Puppeteer tests, and 1 for running the application normally.

### Build Images
1. Frontend/Backend/Test/Mysql `docker build -t mariorun docker/run && docker build -t marioback docker/backend && docker build -t mariotest docker/test && docker build -t mymysql docker/mysql`

### Run Tests
1. Run the test docker-compose file(in docker/test) `cd docker/test && docker-compose up`

### Run Frontend
1. Run the full docker-compose script(in docker/run) `cd ../run && docker-compose up`

### Cleanup
1. `docker rmi mariotest && docker rmi marioback && docker rmi mariorun && docker rmi mysql:8.0.15 && docker rmi node:8.15.1-jessie && docker rmi nginx:1.15.9`

## Run Manually
### Setup
1. Install NPM & Typescript
2. `npm install`

### Run Tests
1. `npm test`

### Run Frontend
1. `npm start`


## Tests Themselves Described
Puppeteer is like ____ clicks on webpages etc...
