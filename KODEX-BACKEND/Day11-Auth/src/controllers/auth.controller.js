import UserModel from "../Models/auth.model.js";

export const UserRegister = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;
    if (!name || !email || !password || !mobile) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const isExisted = await UserModel.findOne({
      email,
    });
    if (isExisted) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const NewUser = await UserModel.create({
      name,
      email,
      password,
      mobile,
    });

    const Token = NewUser.generateJwt();

    res.cookie("token", Token);

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
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const IsExisted = await UserModel.findOne({
        email,
    });

    if (!IsExisted) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const validPass = IsExisted.ComparePassword(password)
    
    if (!validPass) {
        return res.status(401).json({
            massage:"Wrong Password"
        })
    }

    const Token =  IsExisted.generateJwt()

    res.cookie("token",Token)

    return res.status(200).json({
        massage:"User Logged in SuccessFully"
    })

  }

catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
