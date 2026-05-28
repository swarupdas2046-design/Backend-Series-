import express from 'express'
import cookie from 'cookie-parser'
import Routes from './Routes/auth.routes.js'
import RouteR from './Routes/notes.route.js'
// ----- express app ----
const app = express()
// ----- middleware -----
app.use(express.json())
// ----- cookie -----
app.use(cookie())

// ---- auth Routes ----
app.use("/api/auth",Routes)

// ----notes routes ----
app.use("/api",RouteR)

export default app 