import express from "express"
import cors from "cors"
import { userRouter } from "./routes/userRoutes.js"
import { jobRouter } from "./routes/jobRoutes.js"



const app = express()
const port = 4000


app.use(express.json())
app.use(cors())
app.use("/users", userRouter)
app.use("/jobs", jobRouter)



app.listen(port, ()=>{
    return console.log(`Server is running on port ${port}`)
})