import { Request, Response } from "express";
import http from "../utils/axios.js";
import {z} from "zod"
import {userSchema, userListSchema} from "../models/userSchema.js";



const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await http.get("/")
        const users = userListSchema.parse(response.data)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error: "Cannot retrieve response from URL"})
    }
}

export default getUsers