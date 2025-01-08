import { Request, Response } from "express";
import { prisma } from "../app.js";




const createUser = async(req: Request, res: Response) => {
    const {name, email} = req.body
    if (!name || !email){
        return res.status(400).json({error: "Name and email are required"})
    }
    try {
        const createdUser = await prisma.users.create({
            data: {
                name,
                email
            }
        })
        res.status(201).json(createdUser)
    }catch (error){
        console.error(error.message)
        res.status(500).json({error: "Cannot create user"})
    }
}