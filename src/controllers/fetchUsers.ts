import { Request, Response } from "express";
import axios from "axios"
import { z } from "zod";


const http = axios


const userSchema = z.object({
    name: z.string(),
})


const usersSchema = z.array(userSchema)


const fetchUsers = async (req: Request, res: Response) : Promise<void> => {
    try {
        const response = await http.get("https://jsonplaceholder.typicode.com/users")
        const users = usersSchema.parse(response.data)
        res.status(200).json({users})
    } catch (error ){
        res.status(500).json({error: "Cannot fetch from url"})
    }
}


export default fetchUsers