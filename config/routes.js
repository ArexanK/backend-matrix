const express = require("express");

const route = express.Router();
const controller = require("../controllers/controller");



route.get("/", controller.getHomePage);
route.post("/data", controller.createNewUser);
route.get("/data/:id", controller.getUserId);

module.exports = route;
