import mongoose from "mongoose";

// ---- Database Connection ----
const Database = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGODB CONNECTED SUCCESSFULLY");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default Database