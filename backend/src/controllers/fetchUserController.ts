import { Request, Response } from "express";
import http from "../utils/axios.js";
import { usersSchema } from "../models/Users.js";







const fetchUser = async(req: Request, res: Response) =>{
    try {
        const response = await http.get("/users")
        const data = usersSchema.parse(response.data)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error: "Cannot fetch/parse data from URL"})
    } 
}


export default fetchUser