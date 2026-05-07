let mongoose = require('mongoose')

let connectDb = async()=>{
    try {
        await mongoose.connect('mongodb://0.0.0.0/kodex')
        console.log('mongodb Connected');
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = connectDb