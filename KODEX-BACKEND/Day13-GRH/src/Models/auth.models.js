import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    mobile: {
      type: Number,
      required: true,
      min: 1000000000,
      max: 9999999999,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = mongoose.model("GRH", UserSchema);
