import { Request, Response } from "express";
import { prisma } from "../app.js";



export const getUsers = async(req: Request, res: Response) => {
    console.log("Hit get endpoint")
    try {
        const userData = await prisma.app_user.findMany({})
        if (!userData){
             return res.status(400).json({error: "User Data empty"})
        }
        res.status(200).json(userData)
    } catch(error){
        console.error(error.message)
        res.status(500).json({error: "Cannot fetch users"})
    }
}