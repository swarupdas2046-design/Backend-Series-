import express from 'express'
import { UserRegistration } from '../Controllers/user.controller.js'

const route = express.Router()

route.post("/register",UserRegistration)

export default route