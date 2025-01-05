import { Request, Response } from "express";



const createUser = (req: Request, res: Response) => {
    try {
        const {name, email} = req.body
        
        if (!name || !email){
           return res.status(400).json({error: "name and email are required"})
        }
        res.status(201).json({message: "Data received: ", name, email})
    } catch (error) {
        res.status(500).json({error: "An unexpected error has occured when creating a user"})
    }

}

export default createUser

