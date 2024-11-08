const dotenv =require("dotenv");
const express =require('express');
const app=express();
dotenv.config({ path: './config.env'});


require("./db/conn");

app.use(express.json());

// const User= require("./model/userSchema");

// connecting router file to app.js to make app file simpler 

app.use(require("./router/auth"));




app.listen(8000,()=>{
    console.log(`server is running at 8000`);
})