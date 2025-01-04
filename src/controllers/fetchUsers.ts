import { Request, Response } from "express";
import axios from "axios"



const http = axios



export const  fetchUsers = async(req: Request, res: Response): Promise<void> => {
    try {
        const response = await http.get("https://jsonplaceholder.typicode.com/users")
        res.status(200).send(response.data)
    } catch (error) {
        res.status(500).json({error: "Cannot fetch data from url"})
    }
}