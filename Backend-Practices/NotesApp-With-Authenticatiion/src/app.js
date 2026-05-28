import express from 'express'
import cookie from 'cookie-parser'
import Routes from './Routes/auth.routes.js'
import RouteR from './Routes/notes.route.js'

const app = express()
app.use(express.json())
app.use(cookie())

// ---- auth Routes ----
app.use("/api/auth",Routes)

// ----notes routes ----
app.use("/api",RouteR)

export default app 