import express from "express"
import router from "./routes/routes.js"




const app = express()
const port = 4000


app.use(express.json())
app.use("/", router)



app.listen(port, ()=> {
    return console.log(`Server is running on port ${port}`)
})