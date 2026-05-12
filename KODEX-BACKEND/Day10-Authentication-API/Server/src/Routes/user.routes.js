import express from 'express'
import { UserLogin, UserRegistration } from '../Controllers/user.controller.js'

const route = express.Router()

route.post("/register",UserRegistration)
route.post("/login",UserLogin)
export default route