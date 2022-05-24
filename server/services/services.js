const axios = require('axios');

exports.home = (req, res) => {
    res.render("index")
}
exports.registration = (req, res) => {
    res.render("registration")
}
exports.showData= (req, res) => {
    res.render("showData")
}
