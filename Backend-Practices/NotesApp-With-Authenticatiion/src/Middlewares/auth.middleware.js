import jwt from "jsonwebtoken";
import { AuthModel } from "../Models/auth.model.js";

// ----- Auth Middleware -----
export const AuthMiddleware = async (req, res, next) => {
  try {
    // ----- Get Token From Cookies -----
    const token = req.cookies.token;

    // ----- Check Token Found Or Not -----
    if (!token) {
      return res.status(401).json({
        message: "Token Not Found",
      });
    }
    // ----- Verify Token -----
    const Decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // ----- Check Token Valid Or Not -----
    if (!Decode) {
      return res.status(401).json({
        message: "Invalid User",
      });
    }
    // ----- Get User From Token -----
    console.log("Decode ----->", Decode);
    // ----- Get User From Token -----

    const User = await AuthModel.findById(Decode.id);
    if (!User) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    // ----- Set User To Request -----
    req.User = User;
    // ----- Next Middleware -----
    next();
  } catch (error) {
    return res.status(500).json({
      massage: "Internal server error",
    });
  }
}; 
