import mongoose from "mongoose";
import { UserModel } from "../Models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
export const UserRegistration = async (req, res) => {
  try {
        // checking all field are here or not 
    const { name, email, password, mobile } = req.body;
    if (!email || !password || !mobile) {
      return res.status(400).json({
        massage: "All fields are required",
      });
    }
  // checking all field are here or not 

    // checking it's already existed or not  
    const IsExisted = await UserModel.findOne({
      email,
    });

    if (IsExisted) {
      return res.status(409).json({
        massage: "Thi email already existed",
      });
    }
// checking it's already existed or not  

// Hash password 
    const hasPass = await bcrypt.hash(password,10)
// Hash password 


    //new user created // 
    const NewUser = await UserModel.create({
      name,
      email,
      password: hasPass,
      mobile,
    });
    //new user created //

    
    // Authorization---

    const token = jwt.sign({ id: NewUser._id }, process.env.Jwt_Key, {
        expiresIn: "1hr",
    });

    console.log("token---->",token);

    // save token on cookies
    res.cookie("token",token)
    

    return res.status(201).json({
      massage: "registration Successfully",
      user: NewUser,
    });

  } 
  
  catch (error) {
    return res.status(500).json({
      massage: "Internal Server Error",
      error  
    });
  }
};
