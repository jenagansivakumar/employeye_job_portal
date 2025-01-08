import { Request, Response } from "express";
import { prisma } from "../app.js";




export const updateUser = async(req: Request, res: Response) => {
    
    const { email, id} = req.body
    if (!id || !email){
        return res.status(400).json({message: "Requires ID and Email"})
    }
    const updatedUser = await prisma.app_user.update({
        where: {id: Number(id)},
        data: { email: email}
    })
    res.status(200).json(`Updated user: ${updatedUser.name}'s email with ${updatedUser.email}`)
}