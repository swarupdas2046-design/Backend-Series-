import UserModel from "../Models/auth.model.js";
import { authServices, LoginServices, registerServices } from "../Services/auth.services.js";
import { GenerateAccessToken, GenerateRefreshToken } from "../Utils/Token.js";
import jwt from "jsonwebtoken";
export const UserRegister = async (req, res) => {
  try {
      // const { name, email, password, mobile } = ;

      const{AccessToken,refreshToken,NewUser} = await registerServices(req.body)

    res.cookie("accessToken", AccessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      // secure:true
      // sameSite:"strict"
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // secure:true
      // sameSite:"strict"
    });

    return res.status(201).json({
      message: "User created successfully",
      user: NewUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

export const UserLogin = async (req, res) => {
  try {
  //  const { email, password } = ;

      const {AccessToken,refreshToken,IsExisted} = await LoginServices(req.body)

    res.cookie("accessToken", AccessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      massage: "User Logged in SuccessFully",
      User:IsExisted
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const GetRefreshToken = async (req, res) => {
  try {
      let refreshToken = req.cookies.refreshToken;

      const {accessToken} = await authServices(refreshToken)

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
    });

    return res.status(200).json({
      massage: "AccessToken generated",
    });
  } catch (error) {
    return res.status(500).json({
      massage: "Internal Server error",
    });
  }
};
