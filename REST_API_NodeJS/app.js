// console.log("Starting the file")

const  express = require("express");
const coursesRouter = require("./routes/courses")
var bodyParser  = require('body-parser')   //To be used to handle the post requests to save Json data to database

require("dotenv").config();
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/mydb'

const app = express();




//app.use(bodyParser.json)            //To handle the Post request with json data
app.use(bodyParser.json({extended:true}));
app.use("/api/v1/courses/", coursesRouter)  //using the middle where


//Not working online version
// mongo_uri = "mongodb+srv://shivamrai714714:" + urllib.parse.quote("root") + "@cluster0.j7dwyaj.mongodb.net/mydb"



//Database connection that worked for me ::::

mongoose.connect(url ,  {useNewUrlParser: true})
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})



app.listen(process.env.PORT, () =>{
    console.log("Server is running fine ");
    console.log("Yes the port is free and available")
    console.log(process.env.PORT)
} )












//////

// mongoose.connect(url , () =>{
//      console.log("DB connected ")
//  })
//  const db = mongoose.connection
