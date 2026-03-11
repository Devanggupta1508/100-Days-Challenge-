const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");

let data = require("./data.json");
const { nextTick } = require("process");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")) ;
app.use(express.static(path.join(__dirname, "public")));

app.use((req,res,next)=>{
    console.log("request is recived");
    next();
})


app.get("/posts",(req,res)=>{
    res.render("post",{data:data});

});




app.listen(port,()=>{
    console.log("Server is sarting");
});



