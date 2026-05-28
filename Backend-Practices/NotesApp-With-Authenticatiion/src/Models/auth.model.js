import mongoose from "mongoose";

// ------ create Schema for Authentication ----

const AuthSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
     email:{
        type:String,
        required:true,
        trim:true
    },
     password:{
        type:String,
        required:true,
        trim:true
    },
     mobile:{
        type:Number,
        min:1000000000,
        max:9999999999,
        required:true,
        trim:true,
    },
},{
    timestamps:true,
})

// ------ export AuthModel ------ 

export const AuthModel = await mongoose.model("auth",AuthSchema)