import { Request, Response } from "express";
import http from "../utils/httpClient.js";
import {z} from "zod"




const userSchema = z.object({
    name: z.string(),
    id : z.number(),
})


const usersSchema = z.array(userSchema)


const fetchUsersByName = async(req: Request, res: Response) : Promise<void> => {
    const name = req.params.name
    try {
        const response = await http.get("https://jsonplaceholder.typicode.com/users")
        const users = usersSchema.parse(response.data)

        const user = users.find((user) => user.name == name)
        if (!user){
             res.status(404).json({error: "Cannot find user with this id"})
             return
            
        }

        userSchema.parse(user)
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({error: "Cannot retrieve response from url"})
    }

}


export default fetchUsersByName