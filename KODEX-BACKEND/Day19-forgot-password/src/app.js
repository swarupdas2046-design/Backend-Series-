import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import { protect } from './middlewares/auth.middleware.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', protect, (req, res) => {
    res.json({
        success: true,
        message: 'Node Express auth API is running'
    })
})

app.use('/api/auth', authRoutes)

export default app
