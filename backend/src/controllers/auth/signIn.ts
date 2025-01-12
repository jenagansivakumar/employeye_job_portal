import { Request, Response } from "express";
import { findUserByUsername } from "./authService/findUserByUsername.js";
import { prisma } from "../../utils/init.js";
import bcrypt from "bcrypt"





export const userLogin = async (req: Request, res: Response) => {
    const {username, password} = req.body
    if (!username || !password){
        return res.status(400).json({message: "Username and password required"})
    }

    try {
        const userExists = await findUserByUsername(username)
        if (!userExists){
            return res.status(404).json({message: "User does not exist"})
        }
    
        const validLogin = await bcrypt.compare(userExists.password, password)
        if (!validLogin){
            return res.status(401).json({error: "Cannot login"})
        }

        res.status(200).json({message: "Login successful!"})

    } catch (error){
        console.error(error.message)
        res.status(500).json({error: "Login failed"})
    }
}