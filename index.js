import connectToMongo from './db';
import express, { json, static } from 'express';
import cors from "cors";
connectToMongo();

const app = express()

// Port for heroku connection
const port = process.env.PORT || 5000

app.use(cors())

app.use(json())
//  Available routes



app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes.js'))
// app.get('/a/b',(req,res) =>{
//     res.send("Welcome to Inotebok")
// }) 

// setup heroku
if(process.env.NODE_ENV = "production"){
  app.use(static("Client/build"))
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

