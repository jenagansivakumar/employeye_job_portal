import { Request, Response } from "express";
import { prisma } from "../app.js";





const deleteUser = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        if (!id){
            res.status(400).json({error: "ID is required"})
        }
        const deletedUser = await prisma.user.delete({
            where: {id: Number(id)}
        })
        res.status(200).json(`${deletedUser.name} has been deleted`)
    } catch (error){
        res.status(500).json({erorr: "Cannot delete user"})
    }
}

export default deleteUser