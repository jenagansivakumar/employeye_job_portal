import { Request, Response } from "express";
import { prisma } from "../utils/init.js";



const deleteUser = async(req: Request, res: Response) => {
    const {id} = req.body
    if (!id){
        return res.status(400).json({message: "ID is required"})
    }

    const userExists = await prisma.userDetails.findUnique({
        where: {id: Number(id)}
    })
}