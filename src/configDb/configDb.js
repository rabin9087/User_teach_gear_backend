// import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'
const dbName = 'cricket_gear'
// const client = new MongoClient(process.env.MONGO_URL)
// export const connectMongoClient = async (documents) => {
//     try {
//         await client.connect()
//         const table = client.db(dbName);
//         const collection = table.collection(documents)
//         return collection
//     } catch (error) {
//         console.log('error')
//         return error
//     }
//     // finally {
//     //     return client.close()
//     // }
// }

export const connectToDatabase = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL + '/' + dbName)
        conn && console.log('connected to database')
    } catch (error) {
        console.log(error)
    }
}