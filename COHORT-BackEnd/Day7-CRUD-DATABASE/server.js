const app = require("./src/app");
const mongoose = require("mongoose")
const Database = async()=>{
    try {
        await mongoose.connect("mongodb+srv://SwarupDas:ofdWTor81gAt5cBT@cluster2.ctkyeo5.mongodb.net/New")
        console.log("MongoDb Connected Successfully");
    } catch (error) {
        console.log(error);
    }
}
Database()



app.listen(3000,()=>{
    console.log(`server running successfully on port 3000`);
})