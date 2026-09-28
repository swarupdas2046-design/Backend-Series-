import express from 'express'
import { accessTokenController, loginController, registerController } from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post("/register",registerController)

authRouter.post("/login",loginController)

authRouter.get("/getRefresh",accessTokenController)




export default authRouter