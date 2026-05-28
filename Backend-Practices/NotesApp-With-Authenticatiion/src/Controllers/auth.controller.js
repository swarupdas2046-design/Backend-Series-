import { AuthModel } from "../Models/auth.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

    // ----- User register Controller -----
export const UserRegister = async(req,res)=>{
    try {
        
        const {name,email, password ,mobile} = req.body

        // ----- Check all the fields are fill or not -----
        if (!name || !email || !password || !mobile) {
            return res.status(400).json({
                message:"ALL Fields Are REquired"
            })
        }

        // ----- Check Email already existed or not ----- 

        const IsExisted = await AuthModel.findOne({
            email,
        })

        if (IsExisted) {
            return res.status(400).json({
                message:"This Email ALready Existed"
            })
        }


            // ---- create password Hashing with BCRYPT ----
        const HasPass = await bcrypt.hash(password,10) 

        // ----- Create user Profile ----- 

        const NewUser = await AuthModel.create({
            name,
            email,
            password:HasPass,
            mobile,
        })

        // ---- Create Token with JWT -----

        const Token = jwt.sign({id:NewUser._id,email:NewUser.email},process.env.JWT_SECRET_KEY,{
            expiresIn:"1hr",
        })
        // Store Token in Cookies

        res.cookie("token",Token)

        return res.status(201).json({
            message:"User Register SuccessFully",
            user:NewUser,
        })


    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            error:error.message,
        })
    }
}

// ------ User Login Controller ------

export const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check All fields Are fill or not
    if (!email || !password) {
      return res.status(400).json({
        message: "ALL Fields Are required",
      });
    }
    // ----- Check Email existed or Not -----
    const IsExisted = await AuthModel.findOne({
      email,
    });

    if (!IsExisted) {
      return res.status(401).json({
        message: "This Email Not Existed",
      });
    }
    console.log(IsExisted);

    // Check The password Correct Or Not

    const validUser = await bcrypt.compare(password, IsExisted.password);

    if (!validUser) {
      return res.status(404).json({
        message: "Invalid Password",
      });
    }

    // ----- If all the check pass then Generate Token -----
    const Token = jwt.sign(
      { id: IsExisted._id, email: IsExisted.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1hr",
      },
    );

    res.cookie("token", Token);

    return res.status(200).json({
      message: "User Login SuccessFully",
      user: IsExisted,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}
