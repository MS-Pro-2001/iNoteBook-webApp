
// Connect to database (mongodb compass)
const dotenv = require("dotenv")
const mongoose = require('mongoose');

dotenv.config({path:'./config.env'})

// const mongoUrl = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const DB = process.env.DATABASE 

const connectToMongo = ()=>{
    mongoose.connect(DB, ()=>{
        console.log("Connect to database successfully.")
    })
}


module.exports = connectToMongo;