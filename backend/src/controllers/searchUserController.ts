import { Request, Response } from "express";
import { prisma } from "../app.js";



const searchUsers = async(req: Request, res: Response) => {
    console.log("search hit")
    try {
        const {name, email} = req.query
        if (!name && !email){
            return res.status(400).json({error: "Invalid search parameters"})
        }
        const filteredResults = await prisma.user.findMany({
            where: {
                OR: [
                    {name: {contains: String(name), mode: "insensitive"}},
                    {email: {contains: String(email), mode: "insensitive"}},
                ]
            }
        })
        res.status(200).json(filteredResults)
    } catch (error){
        console.error(error)
        res.status(500).json({error: "Cannot filter results"})
    }
}

export default searchUsers