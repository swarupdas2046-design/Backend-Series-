import express from 'express'
import { GetRefreshToken, UserLogin, UserRegister } from '../controllers/auth.controller.js'

const router = express.Router()
router.get("/getRefreshToken",GetRefreshToken)
router.post('/register', UserRegister)
router.post('/login', UserLogin)

export default router