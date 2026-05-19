import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile:{
        type:Number,
        minlength: 10,
        maxlength: 10,
        required: [true, "mobile is required"],
    },
  },
  {
    timestamps: true,
  },
);

  // password hashing...
UserSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

// generate Token
UserSchema.methods.generateJwt = function () {
  return jwt.sign({ id: this._id }, process.env.Jwt_Key, {
    expiresIn: "1hr",
  });
};

// check user password 
UserSchema.methods.ComparePassword = function(password) {
    return bcrypt.compareSync(password,this.password)
}

const UserModel = mongoose.model("User-reg", UserSchema);
export default UserModel;


