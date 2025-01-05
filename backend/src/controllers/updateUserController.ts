import { Request, Response } from "express";
import { prisma } from "../app.js";





const updateUser = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        const {name, email} = req.body
        if (!id || !name || !email){
            res.status(400).json({error: "Invalid input data"})
        }
        const updatedUser = await prisma.user.update({
            where: {id: Number(id)},
            data: {
                name: name,
                email: email
            }   
        })
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(500).json({error: "Cannot update user"})
    }
}


export default updateUser