import express from "express"
import cors from "cors"



const app = express()
const port = 4000


app.use(express.json())
app.use(cors())



app.listen(port, ()=>{
    return console.log(`Server is running on port ${port}`)
})