import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import { protect } from './middlewares/auth.middleware.js'
import path from 'path'
import { fileURLToPath } from 'url'
// import { name } from 'ejs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.get('/',(req, res) => {
    res.render("index")
})

app.use('/api/auth', authRoutes)

export default app
