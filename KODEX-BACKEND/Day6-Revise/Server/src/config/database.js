import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
export let database = async()=>{
    try {
        await mongoose.connect(process.env.MongoDb_URL)
        console.log("Mongodb connected successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}