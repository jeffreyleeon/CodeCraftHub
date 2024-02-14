# CodeCraftHub

CodeCraftHub is an exercise in [IBM's Generative AI: Elevate your Software Development Career course](https://www.coursera.org/learn/generative-ai-elevate-software-development-career).

The learning objectives of this exercise are,
1. Leverage Generatative AI to transform vision into a reality
2. Learn the best practice of prompt engineering - how to query GPT to get accurate answers
3. Design server-side architecture and develop it using Node.js and MongoDB

## Start MongoDB
MongoDB is used as storage in this exercise, to start MongoDB locally.
#### Pre-requisites
- Docker

#### Steps
1. Inside `database/Dockerfile`, update `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD` for admin credentials. (You could also go fancy with vault, but would be an overkill in this exercise.)
2. Build docker image. ```docker build -t my-mongodb .```
3. Run docker container using the image. ```docker run -d -p 27017:27017 --name mongodb-instance my-mongodb```

## Start user management service (API server)
User management service is the API server for getting/adding/deleting users from MongoDB.
APIs
- GET /api/users - Retrieve list of users
- POST /api/users - Create new user
#### Pre-requisites
- Node

#### Steps
1. Install dependencies. ```npm install```
2. Update config with correct port, database connection url, etc
3. Run server: ```npm start```
4. Confirm API server is running fine - ```curl -X GET localhost:3000/api/users``` 