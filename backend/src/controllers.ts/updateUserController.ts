import { Request, Response } from "express";
import { prisma } from "../app.js";





export const updateUser = async(req: Request, res: Response) => {
    const {id, name, email} = req.body
    if (!id|| !name|| !email){
        return res.status(400).json({message: "ID, NAME AND EMAIL MUST PRESENT"})
    }

    const userExists = await prisma.app_user.findUnique({
        where: {email: email}
    })

    if (userExists){
        return res.status(404).json({message: "User already exists"})
    }

    try {
        const updatedUser = prisma.app_user.update({
            where: {id: Number(id)},
            data: {
                name: name,
                email: email
            }
        })
        res.status(200).json((await updatedUser).name)
    } catch (error){
        console.error(error.message)
        res.status(500).json({error: "Cannot update user"})
    }
}