const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname, "public")));





//middleware 

app.use((req,res,next)=>{
console.log("request is recieved");
next();
});


//route 

app.get("/instagram/:userName",(req,res)=>{
    const data = require("./data.json");
       let {userName} = req.params;
    console.log(userName);
const userData = data.find((user) => user.username === userName);

           if( userData){
                 res.render("instagram",{userData :userData});
}
else{
                     res.render("error",{userName : userName});

}

});



app.listen(port,()=>{
    console.log("server is starting");
})