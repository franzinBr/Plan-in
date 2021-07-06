# Plan-in

### Demo
<https://plan-in.herokuapp.com/>

## 💻 technology used
### 🖧 Back-end:
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [MongoDB Cloud Atlas](https://www.mongodb.com/cloud/atlas)
### 🖋 Front-end:
- [ReactJs](https://reactjs.org/)
- [StyledComponents](https://styled-components.com/)

## ⚙ Installation

### 📦 Yarn
If you don't have the yarn package manager, consider installing it with the following command:
```
npm install --global yarn
```
### 🖥 Server
```
yarn install
```
### 🖥 Client
```
cd client
yarn install
```

## 🎲 Database
This application uses mongoDB, if you don't know how to create a database in mongo, here is a [tutorial](https://www.mongodb.com/basics/create-database).

I recommend using the mongo db cloud service: [MongoDB Atlas](https://www.youtube.com/watch?v=rPqRyYJmx2g&ab_channel=MongoDB). 

## 🔧 Configuration
- Rename the **env.sample** file to **.env**
- Open the config.env file and fill it in with the required information
  - MONGO_URI
  - AUTH_TOKEN_SECRET
  - AUTH_TOKEN_EXPIRE
  - REFRESH_TOKEN_SECRET
  - REFRESH_TOKEN_EXPIRE
