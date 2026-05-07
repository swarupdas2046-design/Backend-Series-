let mongoose = require('mongoose')

let database = async()=>{
    await mongoose.connect("mongodb+srv://Devloper_Swarup:1I8f7N8QFUvCbakE@cluster1.ig6h0lr.mongodb.net/kodex")
    try {
        console.log("Mongodb connected Successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = database