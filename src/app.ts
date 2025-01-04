import express from "express"
import router from "./routes/homeRoutes.js"





const app = express()
const port = 3000




app.use("/", router)


app.listen(port, ()=> {
    return console.log(`Server is running on port ${port}`)
})