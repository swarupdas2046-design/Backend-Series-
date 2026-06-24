const { default: mongoose } = require("mongoose");

const Database = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URL)
        console.log("MongoDb Connected Successfully ✅");
    } catch (error) {
        console.log(error);
    }
}

module.exports = Database