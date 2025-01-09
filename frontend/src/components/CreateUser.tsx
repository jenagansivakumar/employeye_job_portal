import React, { useState } from 'react'
import axios from "axios"

export default function CreateUser() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<string> ("")
    const [success, setSuccess] = useState<string> ("")
    const [loading, setLoading] = useState<boolean> (false)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            
            const response = await axios.post("http://localhost:4000/users", {email, name})
            setSuccess("Successfully create user")

        } catch (error){
            setError(error)
        }
       
    }

    if (success){
        return <h1>{success}</h1>
    }
    
  return (
   <>
   <form onSubmit={handleSubmit}>
        <label >Name</label>
            <input type='string' value={name} onChange={handleNameChange}/>
        <label>Email</label>
            <input type='string' value={email} onChange={handleEmailChange}/>
        <button type='submit'> Submit</button>
   </form>
   </>

  )
}
