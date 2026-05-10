import express from 'express'
// import dotenv from 'dotenv'
import cors from 'cors'
import route from './routes/todoList.routes.js'
const app = express()
// dotenv.config()

app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use("/api/todo",route)

export default app