const app = require("./src/app");
const mongoose = require("mongoose")
require("dotenv").config()
const Database = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URL)
        console.log("MongoDb Connected Successfully");
    } catch (error) {
        console.log(error);
    }
}
Database()



app.listen(3000,()=>{
    console.log(`server running successfully on port 3000`);
})