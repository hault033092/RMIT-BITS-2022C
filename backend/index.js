const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

//Routes

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Server Config
app.listen(8080, () => console.log('Port listened!'))
mongoose.connect(process.env, () => console.log('DB connected!'))
