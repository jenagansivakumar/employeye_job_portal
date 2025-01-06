import { Request, Response, NextFunction } from "express";





const errorHandler = (error: Error,req: Request, res: Response, next: NextFunction) => {
    console.error(error.message)
    res.status(500).json({message: "There has been an unexpected error, please try again!"})
}

export default errorHandler