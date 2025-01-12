import axios from 'axios'
import React, { useState } from 'react'

export const LoginPage = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [loading,setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<string>("")


    const authUser = async ()=>{
        setError("")
        setLoading(true)

        try {
            const response = await axios.post("http://localhost:4000/auth/create_user")
            setSuccess("Created new user!")
            console.log(response.data)
        } catch (error: any){
            setError(error.message || "Cannot create new user")
        } finally {
            setLoading(false)
        }
    }




  return (
    <Form>
        
    </Form>
  )
}
