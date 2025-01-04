import { Request, Response } from "express";
import http from "../utils/axios";



const welcome = (req: Request, res: Response) => {
    res.status(200).send("Welcome to the Feather API!")
}


export default welcome