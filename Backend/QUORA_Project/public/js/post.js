let like = document.querySelector(".like");
let data = require("./data.json");

like.addEventListener("click", (event) => {
    console.log("Liked");
     let likePost = data.filter((p)=> data.id === p.id);

          likePost++;
});