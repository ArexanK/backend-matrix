const express = require("express");
const app = express();

app.get("/", (request, response, nextHandler) => {
  response.status(200).send("Hello Matrix Master coders from ExpressJS");
});

app.listen(3000, () => console.log("Web Server running on port 3000"));

//middleware functions 