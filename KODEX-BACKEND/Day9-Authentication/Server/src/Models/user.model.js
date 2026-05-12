import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    mobile:{
        type:Number,
        minlength: 10,
        maxlength: 10,
        required: [true, "mobile is required"],
    },
},{
    timestamps:true,
})

export const UserModel = mongoose.model("User-reg",UserSchema)