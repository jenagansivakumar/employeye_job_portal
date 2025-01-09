import express from "express"
import { PrismaClient } from "@prisma/client"
import router from "./controllers.ts/routes/routes.js"
import cors from "cors"




const app = express()
const port = 4000
app.use(express.json())
app.use(cors())
app.use("/",router)


export const prisma = new PrismaClient()





app.listen(port, ()=>{
    return console.log(`Server is running on port ${port}`)
})