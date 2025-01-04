import { Request, Response } from "express";
import axios from "axios"

const http = axios


const fetchUser = async (req: Request, res: Response) => {
    try {
       const  response = await http.get("https://jsonplaceholder.typicode.com/users")
       res.json(response.data)
    } catch (error) {
        res.status(500).json({error: "Cannot retrieve response from url"})
    }
}


export default fetchUser