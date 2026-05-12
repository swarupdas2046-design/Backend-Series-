import express from 'express'
import route from './Routes/user.routes.js'
import cookie from 'cookie-parser'
import router from './Routes/post.route.js'
let app = express()
app.use(express.json())
app.use(cookie())

app.use("/api/user",route)
app.use("/api/user",router)
export default app