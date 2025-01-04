import { Request, Response } from "express";



const about = (req: Request, res: Response) => {
    res.json({message: "This API is for Feather."})
}

export default about 