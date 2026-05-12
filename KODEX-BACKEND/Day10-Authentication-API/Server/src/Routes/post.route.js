import express from 'express'
import jwt from 'jsonwebtoken'
import { UserModel } from '../Models/user.model.js'
const router = express.Router()

router.get("/post",
    
    async(req,res,next)=>{
        const token = req.cookies.token
        console.log(token);
        
        if (!token) {
            return res.status(401).json({
                massage:"Token not found"
            })
        }
        const decode = jwt.verify(token,process.env.Jwt_Key)
        if (!decode) {
        return res.status(401).json({
                massage:"Unauthorize User"
            })
        }
        console.log("decode -->",decode);

        const User = await UserModel.findById(decode.id)
        if (!User) {
            return res.status(401).json({
                massage:"Unauthorize User"
            })
        }
        next()
},


(req,res)=>{
   return res.status(200).json({
        massage:"Main araha hun Shivani"
    })
})

export default router