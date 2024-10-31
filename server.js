const express = require("express");
const app = express();
const route = require("./config/routes");
const userData = require("./model/data");

const PORT = 2000;

//ejs
app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));
app.use(express.json());

//routes
app.use(route);
app.get("/users", (req, res) => {
  res.render("index", { user: userData });
});

//server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
