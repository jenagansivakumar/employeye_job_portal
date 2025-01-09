import { Request, Response } from "express";
import { prisma } from "../app.js";




export const fetchUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.app_user.findMany({})
        if (users.length === 0){
           return res.status(404).json({message: "No users to display"})
        }
        res.status(200).json(users)
    }catch(error) {
        console.error(error.message)
        res.status(500).json({error: "Cannot fetch users"})
    }
} 