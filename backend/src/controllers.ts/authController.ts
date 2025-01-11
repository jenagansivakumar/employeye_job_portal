import { Request, Response } from "express";
import { prisma } from "../app.js";
import bcrypt from "bcrypt"





const loginUser = async(req: Request, res: Response) => {
    const {username, password} = req.body
    if (!username || !password){
        return res.status(400).json({error: "Username or Password is empty"})
    }

    const usernameExists = await prisma.app_user.findUnique({
        where: {username: username}
    })

    if (!usernameExists){
        return res.status(404).json({message: "Username not found"})
    }

    try {
        const validPassword = await bcrypt.compare(password,usernameExists.password)
        if (!validPassword){
            return res.status(400).json({message: "Password not correct"})
        }
        res.status(200).json({message: "Successful login!"})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: "Cannot login"})
    }

}