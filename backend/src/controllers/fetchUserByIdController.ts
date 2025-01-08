import { Request, Response } from "express";
import { prisma } from "../app.js";



export const fetchUserById = async (req: Request, res: Response) => {
    const {id} = req.params
    if (parseInt(id) === 0 || !id){
       return res.status(400).json({message: "Invalid ID"})
    }
    try {
        const fetchedIdUser = await prisma.app_user.findUnique({
            where: {id: Number(id)}
        })
        res.status(200).json(fetchedIdUser)

    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: "Cannot fetch user by id"})
    }
}