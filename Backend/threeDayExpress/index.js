const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`app is listing on port ${port}`);
    console.log("hello");
});

app.use((req, res) => {
    console.log("Request is received");
});
