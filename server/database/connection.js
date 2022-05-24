const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/exams", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        console.log(`MongoDB Connected: ${con.connection.host}`)
    } catch (error) {
        console.log(`Erorr: ${error} (while connecting DB)`)
    }
}
module.exports = connectDB;