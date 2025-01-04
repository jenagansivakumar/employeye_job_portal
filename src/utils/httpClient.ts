import axios from "axios"



const http = axios.create({
    baseURL: "locahost:3000",
    timeout: 5000,
    headers: {"Content-Type": "application/json"}
})


export default http