import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:[true,"This name already existed in Database"],
    },
    email:{
        type:String,
        unique:[true,"This email already existed in Database"],
        required:true
    },
    password:{
        type:String,
        required:true,
    },
},{
    timestamps:true,
})

export const authModel = mongoose.model("UserData",AuthSchema)
