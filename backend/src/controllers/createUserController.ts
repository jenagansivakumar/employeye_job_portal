import { Request, Response } from "express";
import { prisma } from "../app.js";





const createUser = async(req: Request, res: Response) => {
    try {
        const {name, email} = req.body
        if (!name || !email){
            res.status(400).json({error: "name and email are required to create"})
        }
        const createdUser = await prisma.user.create({
            data: {
                name: name,
                email: email
            }
        })
        res.status(201).json(createdUser)
    } catch (error){
        res.status(500).json({error: "Cannot create user"})
    }
}


export default createUser