import express, { json } from 'express'
import "dotenv/config"
import cors from 'cors'
import morgan from 'morgan'
import { connectMongo } from './src/configDb/configDb.js'
import routers from './src/routers/all-routers/routers.js'

const app = express()
const PORT = process.env.PORT || 8800

app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())

connectMongo()

app.use("/",  routers)

app.use("*" , (req, res, next) => {
    return res.json({
        status: "error",
        message: "Page not Found!"
    })
})

app.use((error, req, res) => {
    const errorCode = error.errorCode || 500
    return res.status(errorCode).json({
        status: "error",
        errorCode,
        message: error.message
    })
})

app.listen(PORT, (error) =>
    error ? console.log(error.message) : console.log(`server is running at http://localhost:${PORT}`))