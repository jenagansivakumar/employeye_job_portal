import { Request, Response } from "express";
import { prisma } from "../app.js";






const fetchUsers = async(req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        if (!users){
            res.status(400).json({erorr: "No users!"})
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error: "Cannot fetch users from database"})
    }
}


export default fetchUsers