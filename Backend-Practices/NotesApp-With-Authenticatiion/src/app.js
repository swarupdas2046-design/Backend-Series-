import express from 'express'
import cookie from 'cookie-parser'
import Routes from './Routes/auth.routes.js'
const app = express()
app.use(express.json())
app.use(cookie())

app.use("/api/auth",Routes)


export default app