import { Request, Response } from "express";
import prisma from "../app.js"



const fetchUsers = async(req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({})
        if (!users){
            return res.status(400).json({message: "No users to fetch"})
        }
        res.status(200).json(users)
    } catch (error){
        res.status(500).json({error: "Cannot fetch users"})
    }
}