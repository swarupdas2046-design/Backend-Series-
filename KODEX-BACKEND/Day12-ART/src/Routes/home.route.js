import express from 'express'
import jwt from 'jsonwebtoken'
import UserModel from '../Models/auth.model.js'
import AuthMiddleware from '../Middleware/auth.middleware.js'

const router = express.Router()

router.get("/",AuthMiddleware,(req,res)=>{
    console.log(req.User);
    
    return res.send("User Authorized that's why they see this Massage")
})

export default router

