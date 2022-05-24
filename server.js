const express = require('express');
const app = express();
app.set("view engine", "ejs")
const bodyParser = require('body-parser')
const connectDB = require("./server/database/connection")

connectDB();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine","ejs")
app.use("/",require("./server/routes/router"))

app.listen(7070)