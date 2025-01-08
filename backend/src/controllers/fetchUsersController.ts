import { Request, Response } from "express";
import { prisma } from "../app.js";



export const  fetchUsers = async(req: Request, res: Response) => {
    console.log("Hit fetch users")
    try {
        const users = await prisma.users.findMany({})
        if (!users){
            res.status(400).json({error: "Users are empty"})
        }
        res.status(200).json(users)
    } catch (error){
        console.error(error.message)
        res.status(500).json({error: "Cannot fetch users"})
    }
}