import { Request, Response } from "express";
import http from "../utils/axios.js";
import  {userListSchema} from "../models/userSchema.js";







const fetchUsers= async (req: Request, res: Response) => {
    try {
        const response = await http.get("/1")
        const users = userListSchema.parse(response.data)
        res.status(200).json({users})
    } catch (error) {
        res.status(500).json({error: "Cannot retrieve response from url"})
    }
}


export default fetchUsers