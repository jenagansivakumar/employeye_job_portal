import express from "express"
import router from "./routes/routes.js"
import { PrismaClient } from "@prisma/client"
import cors from "cors"




const app = express()
const port = 4000
export const prisma = new PrismaClient()
app.use(express.json())
app.use(cors())
app.use("/", router )


app.listen(port, ()=> {
    return console.log(`Server is running on port ${port}`)
})