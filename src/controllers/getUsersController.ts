import { Request, Response } from "express";
import http from "../utils/axios.js";





const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await http.get("/")
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({error: "Cannot retrieve response from URL"})
    }
}

export default getUsers