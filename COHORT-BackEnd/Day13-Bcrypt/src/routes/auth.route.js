import express from 'express'
import { authModel } from '../models/auth.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const authRouter = express.Router()

authRouter.post("/register",async(req,res)=>{
    try {
        const {email,name,password} = req.body
        
        if (!email||!password||!name) {
            return res.status(400).json({
                message:"ALL Fields are required"
            })
        }

        if (email.trim().length<4 || name.trim().length <3 || password.trim().length<6 ) {
            return res.status(400).json({
                message:"Fields must be at least 4 characters long"
            })
        }

        const isExisted = await authModel.findOne({email})

        if (isExisted) {
            return res.status(401).json({
                message:"This email already registered"
            })
        }

        const genSalt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password,genSalt)


        const NewUser = await authModel.create({
            name,
            email,
            password:hashPass,
        })

        const Jwt_token = jwt.sign({id:NewUser._id},process.env.JWT_SECRETE,{expiresIn:"1H"})

        res.cookie("Jwt_Token",Jwt_token,{
            httpOnly:true
        })

        return res.status(201).json({
            message:"User Created Successfully",
            NewUser
        })


    } catch (error) {
    return  res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
})

authRouter.get("/getMe",async(req,res)=>{
    try {
        const Token = req.cookies.Jwt_Token
        console.log("Token---->",Token);
        
        const Decode = jwt.verify(Token,process.env.JWT_SECRETE)
        if (!Decode) {
            return res.status(401).json({
                message:"Invalid Token"
            })
        }
        console.log(Decode);

        const ExistedUser = await authModel.findById(Decode.id)

        return res.status(200).json({
            message:"User Fetched",
            ExistedUser
        })
        
        
        
    } catch (error) {
return  res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
})

authRouter.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body

        if (email.trim().length <4 || password.trim().length <6) {
            return res.status(401).json({
                message:"All fields must be at least 4 characters long"
            })
        }

        const ExistedUser = await authModel.findOne({email})

        if (!ExistedUser) {
            return res.status(401).json({
                message:"User Not Find"
            })
        }

        const verify_Password = await bcrypt.compare(password,ExistedUser.password)

        if (!verify_Password) {
            return res.status(401).json({
                message:"Invalid Password"
            })
        }

        const Jwt_Token = jwt.sign({id:ExistedUser._id},process.env.JWT_SECRETE,{expiresIn:"1H"})

        res.cookie("Jwt_Token",Jwt_Token,{
            httpOnly:true
        })

        return res.status(200).json({
            message:"Login Successfully",
            ExistedUser
        })
        
    } catch (error) {
    return res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
})

export default authRouter