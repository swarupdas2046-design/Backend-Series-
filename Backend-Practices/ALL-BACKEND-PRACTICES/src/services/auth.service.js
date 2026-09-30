import authModel from "../models/auth.model.js"
import ApiError from "../utils/apiError.js"
import { GENERATE_ACCESS_TOKEN, GENERATE_Raw_TOKEN, GENERATE_REFRESH_TOKEN } from "../utils/token.js"
import jwt from 'jsonwebtoken'
import SendEmail from "./email.service.js"
import { CheckMailResponse } from "../utils/emailTemplate.js"

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const registerService = async({name,email,password}) => {
    if(!name || !email || !password) throw new ApiError("Please fill all the fields",400)
    if(!emailRegex.test(email)) throw new ApiError("Please enter valid email",400)
    if(password.length < 6) throw new ApiError("Password must be at least 6 characters long",400)
    
    const isExisted = await authModel.findOne({email})
    if(isExisted) throw new ApiError("Email already exist",400)
    
    const newUser = await authModel.create({name,email,password})
    
    const AccessToken = GENERATE_ACCESS_TOKEN(newUser._id)
    const RefreshToken = GENERATE_REFRESH_TOKEN(newUser._id)
    
    newUser.refreshToken = RefreshToken
    await newUser.save()
    
    return {
        newUser,
        AccessToken,
        RefreshToken
    }
}

export const loginService = async({email,password}) => {
    if(!email || !password) throw new ApiError("Please fill all the fields",400)

    if(!emailRegex.test(email)) throw new ApiError("Please enter valid email",400)

    if(password.length < 6) throw new ApiError("Password must be at least 6 characters long",400)

    const user = await authModel.findOne({email})

    if(!user) throw new ApiError("User not found",400)

    if(!user.ComparePassword(password)) throw new ApiError("invalid Credentials",400)
    
    const AccessToken = GENERATE_ACCESS_TOKEN(user._id)
    const RefreshToken = GENERATE_REFRESH_TOKEN(user._id)
    
    user.refreshToken = RefreshToken
    await user.save()
    
    return {
        user,
        AccessToken,
        RefreshToken
    }
    
}

export const accessTokenService = async(refreshToken) => {
    if(!refreshToken) throw new ApiError("empty token",400)
    
    const decode = jwt.verify(refreshToken,process.env.REFRESH_SECRET)
    
    if(!decode) throw new ApiError("Invalid Refresh Token",400)

    const user = await authModel.findById(decode.id)
    
    if(!user) throw new ApiError("User not found",400)
    
    if(user.refreshToken !== refreshToken) throw new ApiError("Invalid Refresh Token",400)
    
    const AccessToken = GENERATE_ACCESS_TOKEN(user._id)

    return {
        AccessToken,
        user
    }
    
}

export const GoogleService = async(profile)=>{
    const email = profile.emails[0].value

    if(!email) throw new ApiError("Email not Found",400);

    const isExisted = await authModel.findOne({email})

    if (isExisted){
        return isExisted
    }
    const newUser = await authModel.create({
        name:profile.displayName,
        provider_id:profile.id,
        provider:"google",
        email
    })

    return newUser
    
}

export const forgotService = async({email})=>{
    if(!email) throw new ApiError("Please Enter Your Email",400)
    if(!emailRegex.test(email)) throw new ApiError("Please enter valid email",400)

    const isExisted = await authModel.findOne({email})

    if(!isExisted) throw new ApiError("User not found",404)

    const rawToken = GENERATE_Raw_TOKEN(isExisted._id)
    
    const resetLink = `http://localhost:3000/api/auth/reset-password/${rawToken}`

    await SendEmail(isExisted.email,"Please Click on the link to reset your password",CheckMailResponse(isExisted,resetLink))

    return null
}