import { UserModel } from "../Models/auth.models.js";
import ApiError from "../Utils/apiError.js";
import ApiResponse from "../Utils/apiResponse.js";
import asyncHandler from "../Utils/asyncHandler.js";

export const UserRegister = asyncHandler(async (req, res) => {
  const { name, email, password, mobile } = req.body;
  if (!name || !email || !password || !mobile) {
    throw new ApiError(404, "ALL FIELDS ARE REQUIRED !");
  }
  const IsExisted = await UserModel.findOne({
    email,
  });
  if (IsExisted) {
    return res.status(401).json({
      massage: "Email already registered",
    });
  }

  const NewUser = await UserModel.create({
    name,
    email,
    password,
    mobile,
  });

  res.status(201).json(new ApiResponse("User register SuccessFully", NewUser));
});
