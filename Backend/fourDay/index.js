const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

// middleware 
app.use((req, res, next) => {
  console.log("Request is received");
  next();
});

// route
app.get("/firstRoute", (req, res) => {
  res.send("You contacted first route");
  console.log(req);
});

// server start
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
