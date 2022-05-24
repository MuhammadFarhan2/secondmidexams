const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
     
    },
    phone: {
        type: String,
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    address: {
        type: String,
    },
    zip: {
        type: String,
    },
    
    img: {
        type: String,
    },
    
    
});
const usersDB = mongoose.model("users",schema);
module.exports = usersDB;