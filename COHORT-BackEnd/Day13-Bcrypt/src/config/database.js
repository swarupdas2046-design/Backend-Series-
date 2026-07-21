import mongoose from "mongoose";

const Database = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDb Connected SUccessFully ✅");
    } catch (error) {
        console.log(error);
    }
}

export default Database