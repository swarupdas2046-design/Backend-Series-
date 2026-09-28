import jwt from 'jsonwebtoken'

export const GENERATE_ACCESS_TOKEN = (userId)=>{
    return jwt.sign({id:userId},process.env.ACCESS_SECRET,{
        expiresIn:"15M"
    })
}

export const GENERATE_REFRESH_TOKEN = (userId)=>{
    return jwt.sign({id:userId},process.env.REFRESH_SECRET,{
        expiresIn:"1D"
    })
}

