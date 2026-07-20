import express from 'express'
import { authModel } from '../models/auth.model.js'
import jwt from 'jsonwebtoken'
const authRouter = express.Router()

authRouter.post("/register",async(req,res)=>{
    try {
        const {email,name,password} = req.body

        const isExisted = await authModel.findOne({email})
        if (isExisted) {
            return res.status(401).json({
                message:"This User already exist"
            })
        }

        const NewUser = await authModel.create({
            name,
            email,
            password,
        })
        
        const Jwt_Token = jwt.sign({id:NewUser._id},process.env.JWT_SECRET)
        
        res.cookie("Token",Jwt_Token)

        return res.status(201).json({
            message:"user Created SuccessFully",
            NewUser
        })

    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
})


export default authRouter