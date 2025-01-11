import { Request, Response } from "express";
import { findUserByUsername } from "./authService.js";
import bcrypt from "bcrypt";
import { prisma } from "../../utils/init.js";
import jwt from "jsonwebtoken";






const userLogin = async(req: Request, res: Response) => {
    const {username, password} = req.body
    if (!username || !password){
        return res.status(400).json({message: "Username and password required"})
    }

    const userExists = await findUserByUsername(username)
    if (!userExists){
        return res.status(404).json({message: "User does not exist"})
    }

    const isPasswordValid = await bcrypt.compare(password, userExists.password)
    if (!isPasswordValid){
        return res.status(401).json({message: "Password invalid"})
    }

    const token = jwt.sign(
        {id: userExists.id, username: userExists.username},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )

    res.status(200).json({token, message: "Login successful"})



}