import { Request, Response } from "express";
import { prisma } from "../app.js";




export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.body
    if (!id){
        return res.status(400).json({message: "ID is required"})
    }

    const userExists = await prisma.app_user.findUnique({
        where: {id: Number(id)}
    })

    if (!userExists){
        return res.status(404).json({message: "User does not exist!"})
    }

    try {
        const deletedUser = prisma.app_user.delete({
            where: {id: Number(id)}
        })
        res.status(200).json(`${(await deletedUser).name} has been deleted!`)
    } catch (error){
        console.error(error.message)
        res.status(500).json({error: "Cannot delete user!"})
    }
}