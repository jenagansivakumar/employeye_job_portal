import { Request, Response } from "express";
import { prisma } from "../utils/init.js";




export const fetchAllUsers = (req: Request, res: Response)=> {
    try{
        const fetchedUsers = prisma.userDetails.findMany()
        if (!fetchedUsers){
            return res.status(400).json({message: "User list is empty"})
        }
        res.status(200).json(fetchAllUsers)
    } catch (error){
        console.error(error.message)
        res.status(500).json({error: "Cannot fetch users"})
    }
}