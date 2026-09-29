import express from 'express'
import { accessTokenController, GoogleController, loginController, registerController } from '../controllers/auth.controller.js'
import passport from 'passport'

const authRouter = express.Router()

authRouter.post("/register",registerController)

authRouter.post("/login",loginController)

authRouter.get("/getRefresh",accessTokenController)



authRouter.get("/google",passport.authenticate("google",{scope:["profile","email"], session:false}))

authRouter.get("/google/callback",passport.authenticate("google", {session: false, failureRedirect: "/fail"}),GoogleController);

export default authRouter