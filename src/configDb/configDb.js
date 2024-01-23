import mongoose from 'mongoose'

export const connectMongo = () => {
    try {
        const connect = mongoose.connect(process.env.MONGO_URL)
        connect && console.log("MongoDB has been connected")
    } catch (error) {
        console.log(error)
    }
    
}