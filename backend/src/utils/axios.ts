import axios from "axios"




const http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users", 
    timeout: 5000,
})



export default http