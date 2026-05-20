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
        type:String,
        minlength: 10,
        maxlength: 10,
        required: [true, "mobile is required"],
    },
    refreshToken:{
      type:String,
    }
  },
  {
    timestamps: true,
  },
);

  // password hashing...
UserSchema.pre("save", async function () {
   if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});


// check user password 
UserSchema.methods.ComparePassword = function(password) {
    return bcrypt.compareSync(password,this.password)
}

const UserModel = mongoose.model("User-reg", UserSchema);
export default UserModel;


