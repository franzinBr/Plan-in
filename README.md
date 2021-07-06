
<p align="center" width="100%">
    <img width="80%" src="https://user-images.githubusercontent.com/24235241/124618606-ecb00380-de45-11eb-9e6a-606eb93572fe.png"> 
</p>
<h1 align="center">Plan-in</h1>

[![video app run](https://user-images.githubusercontent.com/24235241/124618606-ecb00380-de45-11eb-9e6a-606eb93572fe.png)](https://youtu.be/p1HcFKKivbY "Plan-in")
<p align="center">https://youtu.be/p1HcFKKivbY</p>
<h1 align="center">Video DEMO</h1>

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
- Open the .env file and fill it in with the required information
  - MONGO_URI
  - AUTH_TOKEN_SECRET
  - AUTH_TOKEN_EXPIRE
  - REFRESH_TOKEN_SECRET
  - REFRESH_TOKEN_EXPIRE
## 🟢 Running
***Start the server:*** 
```
yarn start
```
Note: to start the server using nodemon use the following command:
```
yarn dev
```
by default the server will start on port ***3080***,
therefore the server will be at http://localhost:3080

***Start the client:*** 
```
cd client
yarn start
```

by default the server will start on port ***3000***,
therefore the client will be at http://localhost:3000

## Dashboard
only users with admin privileges can access the panel, by default when they start the application the admin user will be:
```
Username: admin
Password: admin
```
but if you want you can change this user in src\configs\adminUser.json
```
{
    "defaultAdminName": "admin",
    "defaultAdminUsername": "admin",
    "defaultAdminEmail": "admin@admin.com",
    "password": "admin"
}

```

## Documentation

if you want to see more details on how the API works, just access the documentation at: http://localhost:3080/api-docs

<p align="center" width="100%">
    <img width="80%" src="https://user-images.githubusercontent.com/24235241/124623036-9c3aa500-de49-11eb-9962-9a4cc924a7f0.png"> 
</p>



