import express from "express"
import cors from "cors"
import { Prisma } from "@prisma/client"
import { PrismaClient } from "@prisma/client"
import { router } from "./routes/routes.js"




const app = express()
app.use(express.json())
app.use(cors())
app.use("/", router)
const port = 4000

export const prisma = new PrismaClient()




app.listen(port, ()=> {
    return console.log(`Server is running on port ${port}`)
})
