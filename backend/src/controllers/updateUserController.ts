import { Request, Response } from "express";
import { prisma } from "../app.js";



const deleteUser = async (req: Request, res: Response) => {
   try {
    const {id} = req.params
    if (!id){
        return res.status(400).json("ID REQUIRED")
    }
    const deletedUser = await prisma.user.delete({
        where: {id: Number(id)}
    })
    console.log(deletedUser)
    res.status(200).json(deletedUser)
   } catch (error){
    res.status(500).json({error: "Cannot delete user!"})
   }
}

export default deleteUser