import { Request, Response } from "express";




const serveData = (req: Request, res: Response) => {
    for (let i =0; i < 10; i++){
        const data = {
         message: "Hello from the backend",
         timestamp: new Date()
        }
        res.status(200).json(data)
    }

}


export default serveData