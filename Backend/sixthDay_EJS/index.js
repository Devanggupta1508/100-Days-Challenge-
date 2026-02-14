const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");





// middleware 

app.use((req,res,next)=>{
    console.log("Request is recevied");
    next();
});






//route 
app.get("/hello",(req,res)=>{
    res.send("This is a route page");
});


app.get("/portfolio",(req,res)=>{
    res.render("portfolio");
})


//server starting 

app.listen(port,()=>{
    console.log("Server is starting");
})