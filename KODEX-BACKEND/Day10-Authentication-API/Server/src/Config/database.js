import mongoose from 'mongoose'

export const Database = async()=>{
    try {
        await mongoose.connect(process.env.Mongoose_URL)
        console.log("MongoDb Connected Successfully");
    } catch (error) {
        console.log(error);
    }
}