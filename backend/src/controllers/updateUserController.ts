import { Request, Response } from "express";
import { prisma } from "../app.js";



const updateUser = async(req: Request, res: Response) => {
    const {id, name, email} = req.body
    if (!id || !name || !email){
        return res.status(400).json({message: "ID, NAME AND EMAIL ARE REQUIRED"})
    }
    const emailExists = await prisma.app_user.findUnique({
        where: {email}
    })

    if (email === emailExists){
        res.status(400).json({error: "Email already exists"})
    }
    try {
        const updatedUser = await prisma.app_user.update({
            where: {id: Number(id)},
            data: {
                name,
                email
            }
        })
        res.status(200).json(`User ${updatedUser.name}'s email has been changed to ${updatedUser.name}`)
    } catch(error){
        console.error(error.message)
        res.status(500).json({error: "Cannot update"})
    }


}