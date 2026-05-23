import express from 'express'
import { UserRegister } from '../Controllers/auth.controller.js'

const Router = express.Router()

Router.post("/register",UserRegister)


export default Router