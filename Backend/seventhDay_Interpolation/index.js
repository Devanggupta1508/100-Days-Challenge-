const express = require("express");
const app = express();
const port = process.env.PORT ||8080;
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


//middleware 

app.use((req,res,next)=>{
    console.log("request is recevied");
    next();
});


//route 
app.get("/",(req,res)=>{
    res.send("is a route page");
});

app.get("/home",(req,res)=>{
     let userName = "devang";
     res.render("home.ejs",{name :userName, mobile:"7878787878",userAge:"20"});
    });

// server start 

app.listen(port,()=>{
    console.log("server is starting");
})