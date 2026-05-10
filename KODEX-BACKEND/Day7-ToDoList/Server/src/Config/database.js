import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const DataBase = async()=>{
    try {
        await mongoose.connect(process.env.MonGoose_URL)
        console.log('MOngodb connected Successfully');
        
    } catch (error) {
        console.log(error);
        
    }
}

export default DataBase