import mongoose from "mongoose";

const Database = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGODB Connected Successfully");
        
    } catch (error) {
        console.log("error in console",error);
        
    }
}
export default Database