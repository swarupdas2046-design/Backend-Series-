import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthModel } from '../Models/auth.model.js'
import { UserRegister } from '../Controllers/auth.controller.js'
const Routes = express.Router()
// ----- User register API ---- 
Routes.post("/register",UserRegister)

export default Routes