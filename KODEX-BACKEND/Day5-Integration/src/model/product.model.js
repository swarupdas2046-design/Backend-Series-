let mongoose = require('mongoose')

let ProductSchema = new mongoose.Schema({
    productName:{
        type : String,
        required : true
    },
    description:{
        type:String,
        default:"Description",
    },
    category:{
        type:String,
        enum:["Men","Women","Children"],
        default:"Men"
    },
    price:{
        amount:{
            type:Number,
            required:true
        },
        currency:{
            type:String,
            enum:["INR","USD"],
            default:"INR"
        }
    },
    stock:{
        type:Number,
        required:true
    },
},
    {
        timestamps:true,
    }
)

let ProductModel = mongoose.model('products',ProductSchema)

module.exports = ProductModel