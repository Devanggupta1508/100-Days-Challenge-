const express = require("express");
const app = express();
const port = process.env.PORT || 8080 ; 
const path = require("path");

app.use(express.urlencoded({extended:true}));


app.use((req,res,next)=>{
    console.log("request is recieved");
    next();
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Form submit hone par yeh chalega (POST)
app.post("/login", (req, res) => {
    console.log("Form Data:", req.body);
    res.send("Form Submitted Successfully");
});
 

app.listen(port,()=>{
    console.log("Server is listing ");
});