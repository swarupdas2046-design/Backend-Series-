import mongoose from "mongoose";

const Database = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Notes")
        console.log("MONGODB Connected SuccessFully");
        
    } catch (error) {
        console.log("error->",error);
    }
}
export default Database