import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};

export default connectDB;
