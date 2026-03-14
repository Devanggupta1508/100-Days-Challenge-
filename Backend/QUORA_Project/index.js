const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");
const methodOverride = require("method-override");

let data = require("./data.json");
const { nextTick } = require("process");
const { v4: uuidv4 } = require("uuid");



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")) ;
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));



app.use(express.urlencoded({extended:true}));


app.use((req,res,next)=>{
    console.log("request is recived");
    next();
});


app.get("/Quora",(req,res)=>{
    res.render("post",{data:data});

});

app.get("/Quora/newPost",(req,res)=>{
    res.render("newPost");
});

app.post("/Quora/newPost/data",(req,res)=>{
    let newPostData = req.body;

     newPostData.authorId = uuidv4(); 
     newPostData.upvotes = 0;
     console.log(newPostData);
     data.push(newPostData);
     console.log("ab se data");
     console.log(data);
       res.redirect("/Quora");
     
});


//edit.ejs file render route 

app.get("/Quora/post/:id/edit",(req,res)=>{
    let {id} = req.params;
    console.log(id);
let post = data.find((p)=> id === p.authorId);
            res.render("edit",{post:post});
})





app.patch("/Quora/post/:id/newdata",(req,res)=>{
    
 let {id} = req.params;

 let post = data.find((p)=>id === p.authorId);
     
     let {description,title,image,tags} = req.body;

     post.description = description;
     post.title = title;
     post.image = image;
     post.tags = tags;
     

     res.redirect("/Quora");



       
});

app.delete("/Quora/:id/Delete",(req,res)=>{
     let {id } = req.params;

     let post = data.find((p)=>id=== p.authorId);

     data = data.filter((p)=> id !== p.authorId);

     res.redirect("/Quora");
});

app.patch("/Quora/post/:id/like",(req,res)=>{

    console.log("like button is clicked");

    let { id } = req.params;

    let post = data.find((p)=> id === p.authorId);

    post.upvotes++;

    res.redirect("/Quora");

});



app.listen(port,()=>{
    console.log("Server is sarting");
});



