let express = require("express");
const UserModel = require("./models/user.model");

let app = express();
app.use(express.json());

app.post("/getUser", async (req, res) => {
  try {
    let { name, email, password, mobile } = req.body;

    if (!name || !email || !password || !mobile) {
      return res.status(400).json({
        massage: "All fields Are Require",
      });
    }

    let newUser = await UserModel.create({
      name,
      email,
      password,
      mobile,
    });

    res.status(201).json({
      massage: "User Created SuccessFully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      massage: "Internal Server Error",
    });
  }
});

app.get("/getUser", async (req, res) => {
  let user = await UserModel.find();
  res.status(200).json({
    massage: "User Fetched Successfully",
    user,
  });
});

app.put("/users/update/:id", async (req, res) => {
  try {
    let { name, email, mobile, password } = req.body;

    if (!mobile || !name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    let { id } = req.params;

    console.log(id);

    let updateUser = await UserModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
        mobile,
        password,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "User updated",
      updateUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
});


app.delete("/users/delete/:id", async (req, res) => {
  try {
    let { id } = req.params;

    await UserModel.findByIdAndDelete(id);

    return res.status(200).json({
      message: "User deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});


module.exports = app;
