import express from 'express'
import dotenv from "dotenv"
import goalRoutes from "./routes/goalRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import errorHandler from './middlewares/errorMiddleware.js'
import {connectDB} from "./config/db.js"
import cors from 'cors'

const PORT=5000
const app=express()
connectDB();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/goals',goalRoutes)
app.use('/api/users',userRoutes)
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`The server is running at ${PORT}`)
})

