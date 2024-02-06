import { hashPassword } from "../../util/bcrypt.js";
import { createAccessJWTTokne } from "../../util/jwts.js";

const documents = "users"
export const newUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body
        req.body.password = hashPassword(password)


        // if(!findUser?._id){
        //     const user = await collection.insertOne(req.body)
        //     if(user?._id){
        //         res.status(200).json({
        //             status: "success",
        //             message: "user has been created successfully",
        //             user
        //         })
        //     }
        // }


    } catch (error) {
        if (error instanceof MongoServerError) {
            console.log(`Error worth logging: ${error}`); // special case for some reason
        }
        throw error; // still want to crash
    }
}