import { Request, Response } from "express";
import { findUserByUsername } from "./authService/findUserByUsername.js";
import { prisma } from "../../utils/init.js";
import bcrypt from "bcrypt"




export const createUser = async (req: Request, res: Response) => {
    const {username, password, email} = req.body
    if (!username || !password || !email){
        return res.status(400).json({message: "One or more fields are empty"})
    }

    const userExist = await findUserByUsername(username)
    if (!userExist){
        return res.status(404).json({message: "Username not found"})
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    try {
        const createdUser = await prisma.userDetails.create({
            data: {
                email,
                username: username,
                password: hashedPassword
            }
        })
    }
}