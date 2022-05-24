const express = require('express');
const service = require('../services/services');
const controller = require('../controller/controller');


const route  = express.Router();

route.get("/", service.home)
route.get("/registration", service.registration)
route.post("/add-user",)



// Creating API:
route.post("/add-account",controller.createAccount);
route.get("/find-account",controller.findAccount);

module.exports = route
