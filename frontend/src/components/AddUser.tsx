import React, { useState } from 'react'
import axios from "axios"

export default function AddUser() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:4001/users", {name, email})
            if (response.status === 201){
                console.log(`${name} has been added`)
                setName("")
                setEmail("")
            } 
            
        }catch (error){
            console.error("error", error)
        }

    }
    


  return (
    
    <form onSubmit={handleSubmit}>
        <input type='string' value={name} onChange={handleNameChange}/>
        <input type='string' value={email} onChange={handleEmailChange}/>
        <button type='submit'>
            Submit
        </button>
    </form>
  )
}
