import { Request, Response } from "express";
import { prisma } from "../app.js";
import { Prisma } from "@prisma/client";




export const updateUser = async(req: Request, res: Response) => {
    
    const { email, id} = req.body
    if (!id || !email){
        return res.status(400).json({message: "Requires ID and Email"})
    }
    try {
        const existingUser = await prisma.app_user.findUnique({
            where: {id: Number(id)}
        })
        if (!existingUser){
            return res.status(404).json({error: "User not found"})
        }
        const updatedUser = await prisma.app_user.update({
            where: {id: Number(id)},
            data: { email: email}
        })
        res.status(200).json(`Updated user: ${updatedUser.name}'s email with ${updatedUser.email}`)

    } catch (error){
        console.error(error.message)
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025" ){
            res.status(404).json({error: "Cannot find user"})
        }
        res.status(500).json({error: "Cannot update user"})
    }
}