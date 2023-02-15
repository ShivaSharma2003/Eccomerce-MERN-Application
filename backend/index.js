import { connectDatabase } from './mongo.js'
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import CreateUserFunction from './Routes/UserRoute.js'

const app = express()

// Middleware configuration
dotenv.config()
app.use(cors())
app.use(express.json())

// Connecting Database
connectDatabase()

// routes api
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World" })
    res.status()
})

app.use('/', CreateUserFunction)

// listening server
app.listen(process.env.PORT, (req, res) => {
    console.log(`Server Listening on http://localhost:${process.env.PORT}`)
})