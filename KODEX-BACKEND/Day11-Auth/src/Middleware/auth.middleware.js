import UserModel from "../Models/auth.model.js";
import jwt from 'jsonwebtoken'
const AuthMiddleware = async(req,res,next)=>{
    try {
        const Token = req.cookies.token
        console.log("TOken ---->",Token);
        
        if (!Token) {
            return res.status(404).json({
                massage:"Invalid User"
            })
        }
        const Decode = jwt.verify(Token,process.env.Jwt_Key)

        if (!Decode) {
            return res.status(404).json({
                massage:"Invalid User"
            })
        }
        console.log("Decode ---->",Decode);
        const User =  await UserModel.findById(Decode.id)
        console.log(User);
        req.User = User
        next()

    } 
    
    
    catch (error) {
        return res.status(500).json({
            massage:"Internal server error"
        })
    }
}

export default AuthMiddleware