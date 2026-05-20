import express from 'express'
import router from './Routes/auth.routes.js'
import cookie from 'cookie-parser'
import homeRoutes from './Routes/home.route.js'
const app = express()
app.use(express.json())
app.use(cookie())
app.use("/api/auth",router)
app.use("/api/home",homeRoutes)
export default app 


