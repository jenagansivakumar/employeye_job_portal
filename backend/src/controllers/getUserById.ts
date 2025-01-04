import { Request, Response } from "express";
import http from "../utils/axios.js";
import { userSchema} from "../models/userSchema.js";



const getUsersById = async (req: Request, res: Response) => {
    const {name} = req.params
    if (!name) {
        res.status(400).json({error: "name is required"})
    }
    try {
        const response = await http.get(`/users/${name}`)
        const user = userSchema.parse(response.data)
        if (user.name == name){
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(500).json({error: "Cannot find user with name"})
    }
}

export default getUsersById