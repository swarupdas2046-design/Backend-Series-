import express from 'express'
import { accessTokenController, forgotPassController, GoogleController, loginController, registerController, resetPasswordController, updatePasswordController } from '../controllers/auth.controller.js'
import passport from 'passport'

const authRouter = express.Router()

authRouter.post("/register",registerController)

authRouter.post("/login",loginController)

authRouter.get("/getRefresh",accessTokenController)

authRouter.post("/forgotPassword",forgotPassController)

authRouter.get("/reset-password/:token",resetPasswordController)

authRouter.post("/update-password/:userid",updatePasswordController)



authRouter.get("/google",passport.authenticate("google",{scope:["profile","email"], session:false}))

authRouter.get("/google/callback",passport.authenticate("google", {session: false, failureRedirect: "/fail"}),GoogleController);

export default authRouter