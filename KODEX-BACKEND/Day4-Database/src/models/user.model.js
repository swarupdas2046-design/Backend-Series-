let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: String,
    mobile: Number,
    email: String,
    password: String,
},{
    timestamps:true,
});

let UserModel = mongoose.model('user',userSchema,"user")

module.exports = UserModel