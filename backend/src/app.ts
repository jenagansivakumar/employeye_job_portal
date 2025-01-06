import express from "express"
import { PrismaClient } from "@prisma/client"
import cors from "cors"


export  const prisma = new PrismaClient()


const app = express()
const port = 4000
app.use(express.json())
app.use(cors())


app.listen(port, ()=> {
    return console.log(`Server is running on port ${port}`)
})



export default prisma