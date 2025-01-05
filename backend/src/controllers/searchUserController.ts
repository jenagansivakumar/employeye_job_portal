import { Request, Response } from "express";
import { prisma } from "../app.js";



const searchUsers = async(req: Request, res: Response) => {
    try {
        const {name, email} = req.query
        if (!name || !email){
            res.status(400).json({error: "Invalid search parameters"})
        }
        const filteredResults = await prisma.user.findMany({
            where: {
                OR: [
                    {name: String(name)},
                    {email: String(email)}
                ]
            }
        })
        res.status(200).json(filteredResults)
    } catch (error){
        res.status(500).json({error: "Cannot filter results"})
    }
}

export default searchUsers