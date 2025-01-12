import { Request, Response } from "express";
import { findUserByUsername } from "./authService/findUserByUsername.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"





export const userLogin = async (req: Request, res: Response) => {
    const {username, password} = req.body
    const SECRET_KEY = process.env.JWT_SECRET

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

        const payload = {id: userExists.id, username: userExists.username}

        const token = jwt.sign(payload, SECRET_KEY,{expiresIn:"1h"})

        res.send({token})

    } catch (error){
        console.error(error.message)
        res.status(500).json({error: "Login failed"})
    }
}