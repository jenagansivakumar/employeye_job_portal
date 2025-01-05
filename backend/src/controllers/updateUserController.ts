import { Request, Response } from "express";





const updateUser = (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const {name, email} = req.body
    }
}