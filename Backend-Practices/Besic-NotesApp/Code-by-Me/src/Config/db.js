import mongoose from "mongoose";

const database = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
    }
}

export default database 