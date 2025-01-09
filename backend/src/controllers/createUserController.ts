import { Request, Response } from "express";
import { prisma } from "../app.js";




export const createUser = async (req: Request, res: Response) => {
    console.log("Hit post route")
    const {name, email} = req.body
    if (!name || !email){
        return res.status(400).json({message: "Invalid input"})
    }
    const userExists = await prisma.app_user.findUnique({
        where: {email}
    })
    if (userExists){
        return res.status(400).json({message: "User already exists"})
    }
    try {
        const createdUser = await prisma.app_user.create({
            data: {
                name: name,
                email: email
            }
        })
        res.status(201).json(`${createdUser.name} was added to the database`)
    } catch (error){
        console.error(error.message)
        res.status(500).json({error: "Cannot create user"})
    }
}


