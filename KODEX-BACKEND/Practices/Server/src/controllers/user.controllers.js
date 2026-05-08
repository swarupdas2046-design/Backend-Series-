import { UserModel } from "../model/login.model.js";

export let registerControllers = async(req, res) => {
  let { name, password, email, mobile } = req.body;

  if (!name || !password || !email || !mobile) {
    return res.status(400).json({
      massage: "All fields  are required",
    });
  }
  let NewUser = await UserModel.create({
    name,
    email,
    password,
    mobile,
  });

return res.status(200).json({
    massage: "This massage is the confirmation",
    User: NewUser,
  });
}

export let getverifyControllers = async(req,res)=>{
    try {
        let allUser = await UserModel.find() 
        return res.status(200).json({
            massage:"user fetched Successful",
            user:allUser,
        })

    } catch (error) {
        console.log(error);
        
    }
}