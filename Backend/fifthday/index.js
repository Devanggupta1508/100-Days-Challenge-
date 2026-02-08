const express = require ("express");
const app = express();
const port = process.env.PORT || 8080 ;

// middleware 
app.use((req,res,next)=>{
    console.log("Request is recevied");
    next();

});

//Route 
app.get("/:userName/:id",(req,res)=>{

    let {userName,id} = req.params;
    let {q} = req.query;
    console.log(`welcome to ${userName} , ${id}`);
    res.send(`Welcome to ${userName} , ${id} ,${q}`);
});


app.get("/mobile",(req,res)=>{
    let { amount } = req.query;

    if (!amount) {
        return res.send("Search the query");
    }

    if (amount > 1000) {
        return res.send("greater than 1000 mobiles are Samsung, Apple");
    }

    res.send("under 1000 mobiles are Nokia");
});


//server start 

app.listen(port,()=>{
    console.log("server is starting");

})

