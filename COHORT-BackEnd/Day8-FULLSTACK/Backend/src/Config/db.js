import mongoose from 'mongoose'
const DataBase = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGODB Connected SUccessfully ✅");
        
    } catch (error) {
        console.log(error);
    }
}

export default DataBase