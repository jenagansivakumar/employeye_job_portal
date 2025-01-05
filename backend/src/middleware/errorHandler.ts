import { Request, Response, NextFunction } from "express";




const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Error: ", error.message)
    res.status(500).json({
        error: "Something went wrong. Please try again later"
    })
}

export default errorHandler