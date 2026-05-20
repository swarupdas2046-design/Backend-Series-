import UserModel from "../Models/auth.model.js";
import { GenerateAccessToken, GenerateRefreshToken } from "../Utils/Token.js";
import jwt from 'jsonwebtoken'

export const registerServices = async(data)=>{
    
        const { name, email, password, mobile } = data
    
        if (!name || !email || !password || !mobile) throw new Error("All fields are required");
        
        const isExisted = await UserModel.findOne({
          email,
        });
        if (isExisted) throw new Error("User already exists");
        
    
        const NewUser = await UserModel.create({
          name,
          email,
          password,
          mobile,
        });
    
        const AccessToken = GenerateAccessToken(NewUser._id);
        const refreshToken = GenerateRefreshToken(NewUser._id);
    
        NewUser.refreshToken = refreshToken;
        await NewUser.save();

        return{
            AccessToken,
            refreshToken,
            NewUser
        }
}

export const LoginServices = async(data)=>{
     const { email, password } = data;
    
        if (!email || !password) throw new Error("All fields are required");
        
    
        const IsExisted = await UserModel.findOne({
            email,
        });
    console.log(IsExisted);
    
        if (!IsExisted) throw new Error("User not found");
        
    console.log(password);
    
        const validPass = IsExisted.ComparePassword(password);
    
        if (!validPass) throw new Error("Wrong Password");
        
    
        const AccessToken = GenerateAccessToken(IsExisted._id);
        const refreshToken = GenerateRefreshToken(IsExisted._id);
    
        IsExisted.refreshToken = refreshToken;
        await IsExisted.save();

        return{
            AccessToken,
            refreshToken,
            IsExisted
        }
}

export const authServices = async(refreshToken)=>{


    if (!refreshToken) {
      return res.status(404).json({
        massage: "Token Not Found",
      });
    }

    let Decode = jwt.verify(refreshToken, process.env.SECRET_REFRESH_KEY);

    if (!Decode) {
      return res.status(401).json({
        massage: "Unauthorized user",
      });
    }
    const user = await UserModel.findById(Decode.UserId);

    if (!user) {
      return res.status(404).json({
        massage: "Unauthorized User",
      });
    }
  
    if (refreshToken !== user.refreshToken) {
      return res.status(401).json({
        massage: "Unauthorized User",
      });
    }

    const accessToken = GenerateAccessToken(user._id);

    return{
        accessToken
    }

}