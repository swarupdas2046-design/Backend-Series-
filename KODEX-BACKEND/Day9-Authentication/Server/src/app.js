import express from 'express'
import route from './Routes/user.routes.js'
import cookie from 'cookie-parser'
let app = express()
app.use(express.json())
app.use(cookie())

app.use("/api/user",route)
export default app