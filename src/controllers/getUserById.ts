import { Request, Response } from "express";
import http from "../utils/axios.js";
import userSchema from "../models/userSchema.js";



const getUsersById = (req: Request, res: Response) => {
    const {id} = req.params
    if (!id) {
        res.status(400).json({error: "ID is required"})
    }
    try {
        const response = http.get(`/users/${id}`)
        const user = user

    }
}