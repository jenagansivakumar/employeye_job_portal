import { Request, Response } from "express";



const users = ["User 1", "User 2", "User 3"]



const getUsers = (req : Request, res: Response) :void => {
    res.send({users})
}


export default getUsers