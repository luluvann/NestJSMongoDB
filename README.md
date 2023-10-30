# A simple NestJS app connected to a MongoDB database

## Installation

1. Create a .env file in the root folder
2. Insert the following variable:
```bash
CONNECTMONGODB='mongodb+srv://username:password@clustername.clustercode.mongodb.net/dbname'
```
3. Replace the string url by the right MongoDB url provided on your MongoDB
  - Connect to MongoDB Atlas
  - Click 'Database' in the left menu
  - If there is no cluster, create one. If there is, click on 'Connect' button
  - Click on 'MongoDB for VSCode'
  - Go to .3 and copy the link provided and paste it to replace the above url.
  - Replace with the correct MongoDB username, password associated to that username and the dbname
    - To get the MongoDB username and password, go to 'Database Access' to see the list of usernames associated
    - Click on the edit button (pen icon) to see the password
4. Run the below command in the terminal to install all the dependencies
```bash
$ npm install
```

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