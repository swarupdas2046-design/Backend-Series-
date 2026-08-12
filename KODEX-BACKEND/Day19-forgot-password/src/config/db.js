import mongoose from 'mongoose'

const connectDB = async () => {
    const mongoUrl = process.env.MONGO_URL

    if (!mongoUrl) {
        throw new Error('MONGO_URL is missing in environment variables')
    }

    const connection = await mongoose.connect(mongoUrl)
    console.log(`MongoDB connected successfully✅`)
}

export default connectDB
