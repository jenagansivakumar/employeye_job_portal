import { Request, Response } from "express";


const postTest = (req: Request, res: Response) => {
    const data = req.body
    res.status(200).json({receivedData: data})
}

export default postTest