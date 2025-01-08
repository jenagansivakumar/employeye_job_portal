import { Request, Response } from "express";
import { prisma } from "../app.js";



export onst deleteUser = (req: Request, res: Response) => {
    const {id} = req.body
    if (!id){
        return res.status(400).json({error: "ID is necessary"})
    }
    try {
        const deletedUser = prisma.users.delete({
            where: {id: Number(id)}
        })
        res.status(200).json(deletedUser)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: "Cannot delete user"})
    }
}