import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:[true,"Username Must be Unique"],
        required:true
    },
    email:{
        type:String,
        unique:[true,"email Must be Unique"],
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
},{
    timestamps:true
})

export const authModel = mongoose.model("userData",authSchema)