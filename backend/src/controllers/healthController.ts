import { Request, Response } from "express";




const healthCheck =(req: Request, res: Response) => {
    res.send("OK")
}

export default healthCheck