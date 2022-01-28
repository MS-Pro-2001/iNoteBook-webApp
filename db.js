
// Connect to database (mongodb compass)
const dotenv = require("dotenv")
const mongoose = require('mongoose');

// const mongoUrl = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const mongoUrl = "mongodb+srv://mridul:-5cH4mAFC-2z7Jb@cluster0.qbivq.mongodb.net/inotebook?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoUrl,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false


    } .then(()=>{
        console.log("Connect to database successfully.")
    }))
}


module.exports = connectToMongo;