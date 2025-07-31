import mongoose from "mongoose"

export const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/goals")
        console.log("Connected to mongoDB")
    }
    catch(err){
        console.log(err.message)
        process.exit(1)
    }
}