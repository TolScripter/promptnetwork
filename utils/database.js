import mongoose from 'mongoose'

export const connectToDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
    }
}