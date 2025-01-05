import express from "express"




const app = express()
const port = 4000




app.listen(port, ()=> {
    return console.log(`Server is running on port ${port}`)
})