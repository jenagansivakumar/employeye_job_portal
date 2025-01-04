import { Request, Response } from "express";
import http from "../utils/axios.js";



const fetchPolicies =async (req: Request, res: Response) => {
    try {
        const response = await http.get("/users")
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({error: "Cannot fetch policies"})
    }
}


export default fetchPolicies