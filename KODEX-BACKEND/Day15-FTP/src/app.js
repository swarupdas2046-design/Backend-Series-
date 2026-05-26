import express from 'express'
import Routes from './Routes/file.route.js'

const app = express()
app.use(express.json())
app.use("/api",Routes)


export default app