import { Request, Response } from "express";
import { prisma } from "../app.js";




export const createUser = (req: Request, res: Response) => {
    console.log("Hit post route")
    const {id, name, email} = req.body
    if (!name || !email){
        return res.status(400).json({message: "Invalid input"})
    }
    const userExists = prisma.app_user.findUnique({
        where: {id: Number(id)}
    })
    if (userExists){
        res.status(400).json({message: "User already exists"})
    }
    try {
        const createdUser = prisma.app_user.create({
            data: {
                name: name,
                email: email
            }
        })
        res.status(201).json(`${createdUser} was added to the database`)
    } catch (error){
        console.error(error.message)
        res.status(500).json({error: "Cannot create user"})
    }
}


