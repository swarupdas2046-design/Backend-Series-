import { accessTokenService, loginService, registerService } from "../services/auth.service.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const userData = (user)=>{
    return {
        _id:user._id,
        name:user.name,
        email:user.email,
        createdAt:user.createdAt,
        updatedAt:user.updatedAt
    }
}

export const registerController = asyncHandler(async(req, res) => {
    const {AccessToken,RefreshToken,newUser} = await registerService(req.body)

    res.cookie("accessToken",AccessToken,{
        httpOnly:true,
        secure:true,
        maxAge:15*60*1000 // 15 minutes
    })
    res.cookie("refreshToken",RefreshToken,{
        httpOnly:true,
        secure:true,
        maxAge:24*60*60*1000 // 24 hours
    })

    return  res.status(201).json(new ApiResponse("User Registered Successfully",userData(newUser)))
})

export const loginController = asyncHandler(async(req, res) => {
    const {AccessToken,RefreshToken,user} = await loginService(req.body)

    res.cookie("accessToken",AccessToken,{
        httpOnly:true,
        secure:true,
        maxAge:15*60*1000 // 15 minutes
    })
    res.cookie("refreshToken",RefreshToken,{
        httpOnly:true,
        secure:true,
        maxAge:24*60*60*1000 // 24 hours
    })

    return  res.status(200).json(new ApiResponse("User Logged In Successfully",userData(user)))

})

export const accessTokenController = asyncHandler(async(req, res) => {
    const {AccessToken,user} = await accessTokenService(req.cookies.refreshToken)

    res.cookie("accessToken",AccessToken,{
        httpOnly:true,
        secure:true,
        maxAge:15*60*1000 // 15 minutes
    })

    return  res.status(200).json(new ApiResponse("refresh Successfully",userData(user)))
})