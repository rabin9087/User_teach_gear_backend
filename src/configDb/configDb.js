// import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'

export const connectToDatabase = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL)
        conn && console.log('connected to database')
    } catch (error) {
        console.log(error)
    }
}