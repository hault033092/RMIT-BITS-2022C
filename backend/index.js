const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

//Routes
const userRoute = require('./routes/user.routes')

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/user', userRoute)

//Server Config
app.listen(8080, () => console.log('Port listened!'))
mongoose.connect(process.env.DB_CONNECTION, () => console.log('DB connected!'))
