// console.log("hi Brajeswar");

//create server

const express = require("express");

const server = express();

const middleware1 = (req, res, next) =>{
    console.log("This is middleware 1");
    next()   //block the flow and take it back to the requested route
}

const middleware2 = (req, res, next) =>{
    console.log("This is middleware 2");
    next()   //block the flow and take it back to the requested route
}

server.use(middleware1);
// server.use(middleware2);




server.get("/",(req, res)=>{
    res.send("WELCOME")
})  

server.get("/user",middleware2,(req, res)=>{
    res.send("Hello Brajeswar")
})  

server.get("/about",(req, res)=>{
    res.send({name: "Brajeswar", age: "24"})
})

server.listen(8007, () =>{
    console.log("Server is running at porty: 8007");
})







// HTTP METHODS
// CRUD: create read update delete
// get post update/put delete


//middlewares: 
