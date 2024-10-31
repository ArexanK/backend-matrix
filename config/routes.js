const express = require("express");
//import express from 'express'

const route = express.Router();
const controller = require("../controllers/controller");



route.get("/", controller.getHomePage);
route.post("/data", controller.createNewUser);
route.get("/data/:id", controller.getUserId);

module.exports = route;
// export default  route