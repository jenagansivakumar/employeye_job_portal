import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
import cors from "cors"
import { router } from "./routes/routes.js";



export const prisma = new PrismaClient()




const app = express()
const port = 4001

app.use(cors())
app.use(express.json())
app.use("/", router)



app.listen(port, ()=>{
    return console.log(`Server is running on port ${port}`)
})