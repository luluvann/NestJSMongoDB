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

## Routes examples explanations

### Users
in /src/users, 3 files will be found: *users.controller.ts*, *users.module.ts*, *users.service.ts*. Respectively, each file contains the users's controller, the module and service as per the NestJs framework architecture. The users will be assorted with a schema defined in */src/schemas/users.schema.ts* and with a DTO defined in */src/dto/insert-user*.dto.ts
in the controller file *users.controller.ts*, there will be 3 routes defined as examples as a root route http://localhost:3000/users/:
- A POST req: **'insertUser'** which will take a json body following the dto structure defined in insert-user.dto.ts and return a response of type **User**. http://localhost:3000/users/
- A GET req: **'getUsers'** which will return an array of **User** type http://localhost:3000/users/
- A GET rea: **'getUserByID'** which will take a user id as a param and will return the requested **User** http://localhost:3000/users/:id