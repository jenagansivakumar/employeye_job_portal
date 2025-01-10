import { Request, Response } from "express";
import { prisma } from "../app.js";
import bcrypt from "bcrypt";





const userLogin = async(req: Request, res: Response) => {
    const {username, password} = req.body
    if (!username || !password){
        return res.status(400).json({message: "Username and Password required"})
    }

    const userNameExists = await prisma.app_user.findUnique({
        where: {username: username}
    })

    if (userNameExists){
        return res.status(400).json({message: "Username already exists!"})
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password,saltRounds)

    try {
        const credentialsCreated = await prisma.app_user.create({
            data: {
                username,
                password: hashedPassword
            }
        })

        res.status(201).json(`${username} has been successfully created`)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: "Cannot create user credentials"})
    }
}