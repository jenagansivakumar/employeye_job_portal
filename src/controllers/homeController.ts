import { Request, Response } from "express"



const sayHello = ( req: Request , res : Response) :void => {
    res.send("Hello")
}


export default sayHello