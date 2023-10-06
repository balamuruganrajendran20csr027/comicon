// const socket = require("socket.io")
const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

const cors = require("cors")
app.use(cors())

const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const url= 'mongodb://127.0.0.1:27017/comics' //mongodb connect url
const database = require("./db/db")
database(url)


const user = require("./routes/user")
app.use("/",user)


const port=9000
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})