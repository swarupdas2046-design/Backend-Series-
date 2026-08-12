import { Router } from 'express'
import { forgotPassword, login, register, ResetPassword } from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)


router.post("/forgot-password", forgotPassword)
router.get("/reset-password/:token", ResetPassword)
export default router
