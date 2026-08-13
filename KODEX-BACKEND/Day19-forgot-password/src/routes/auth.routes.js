import { Router } from 'express'
import { forgotPassword, login, register, ResetPassword, UpdatePassword } from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)


router.post("/forgot-password", forgotPassword)
router.get("/reset-password/:token", ResetPassword)

router.post("/update-password/:params", UpdatePassword)

export default router
