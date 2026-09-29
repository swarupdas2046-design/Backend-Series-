import authModel from "../models/auth.model.js";
import ApiError from "../utils/apiError.js";
import jwt from "jsonwebtoken";
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) throw new ApiError("Empty Token", 401);

    const decode = jwt.verify(token, process.env.ACCESS_SECRET);

    if (!decode) throw new ApiError("Invalid Token", 401);

    const user = await authModel.findById(decode.id);

    if (!user) throw new ApiError("User not found", 401);

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
