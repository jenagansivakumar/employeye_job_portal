import { Request, Response } from "express";
import { prisma } from "../app.js";




export const createUser = async (req: Request, res: Response) => {
    const {name, email} = req.body
    if (!name || !email){
        return res.status(400).json({message: "Invalid data provided to create user"})
    }
    const userExists = await prisma.app_user.findUnique({
        where: {email: email}
    })

    if (userExists){
        return res.status(400).json({message: "User exists already"})
    }

    try {
        const createdUser = await prisma.app_user.create({
            data: {
                name,
                email
            }
        })
        res.status(201).json(`${createdUser.name} has been added to the database`)
    } catch (error){
        console.error(error.message)
        res.status(500).json({error: "Cannot create user"})
    }
}