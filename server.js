const express = require("express");
const app = express();
const route = require("./config/routes");

const PORT = 2000;
const userData = require("./model/data");

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/users", (req, res) => {
  res.render("index", { user: userData });
});

app.use(express.static("public"));

app.use(express.json()); //middleware
app.use(route);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
