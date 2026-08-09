import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },

    provider:{
        type:String,
        enum: ["google", "facebook"],
    },
    provider_id:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

export const authModel = mongoose.model("auth",authSchema)