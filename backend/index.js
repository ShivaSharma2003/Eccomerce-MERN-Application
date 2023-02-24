import { connectDatabase } from './mongo.js'
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import CreateUserRouter from './Routes/UserRoute.js'
import mongoose from 'mongoose'

const app = express()

// Middleware configuration
dotenv.config()
app.use(cors())
app.use(express.json())

// Connecting Database
connectDatabase()
const db = mongoose.connection

db.on("error", (error) => {
    console.log(error)
    console.log("Error Occured")
})
db.once("open", () => {
    console.log("Database Successfully Connected")
})

db.once("close", () => {
    console.log("database Disconnected")
})

// routes api
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World" })
    res.status()
})

app.use('/', CreateUserRouter)

// listening server
app.listen(process.env.PORT, (req, res) => {
    console.log(`Server Listening on http://localhost:${process.env.PORT}`)
})