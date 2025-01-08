import { Request, Response } from "express";
import http from "../utils/axios.js";
import { User, Users } from "../models/Users.js";




export const getUser = async (req: Request, res: Response) => {
    try {
        const response = await http.get("/users")
        if (!response){
            return res.status(400).json({message: "Response is empty"})
        }
        const user = Users.parse(response.data)
        res.status(200).json(user)
    } catch (error){
        console.error(error.message)
        res.status(500).json({error: "Cannot fetch from url"})
    }
}