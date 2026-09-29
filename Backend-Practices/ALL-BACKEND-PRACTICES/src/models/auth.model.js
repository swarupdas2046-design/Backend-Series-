import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        // required:true,
        trim:true
    },
    refreshToken:{
        type:String,
    },
    provider:{
        type:String,
        enum:["google","github","facebook"]
    },
    provider_id:{
        type:String
    },


},{
    timestamps:true
})


authSchema.pre("save",function(){
    if (!this.isModified("password")) {
        return
    }
    this.password = bcrypt.hashSync(this.password,10)
})

authSchema.methods.ComparePassword = function(password) {
    return bcrypt.compareSync(password,this.password)
}

const authModel = mongoose.model("auths",authSchema)

export default authModel



