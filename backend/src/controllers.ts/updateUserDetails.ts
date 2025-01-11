import { Request, Response } from "express";
import { prisma } from "../utils/init.js";



const updateUser = async(req: Request, res: Response) => {
    const {id, email, name} = req.body
    if (!id || !email || !name){
        return res.status(400).json({message: "ID, Email and Name are required to update details"})
    }

    const userExists = await prisma.userDetails.findUnique({
        where: {id: Number(id)}
    })

    if (!userExists){
        return res.status(404).json({message: "User does not exist"})
    }
}