import express, { Router } from "express"
import router from "./routes/routes.js"
import morgan from "morgan"

const app = express()
const port = 3000

app.use(express.json())
app.use("/", router)
app.use(morgan("dev"))

app.listen(port, ()=>{
    return console.log(`Server is running on port ${port}`)
})

