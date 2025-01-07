import { Request, Response } from "express";
import { prisma } from "../app.js";



const createUser = async(req: Request, res: Response) => {
    try {
        const {name, email} = req.body
        if (!name || !email){
            return res.status(400).json({error: "Name and email must be entered"})
        }
        const createdUser = await prisma.user.create({
            data: {
                name,
                email
            }
        })
        res.status(201).json(createdUser)
    } catch (error){
        res.status(500).json({error: "Cannot create user"})
    }
}

export default createUser