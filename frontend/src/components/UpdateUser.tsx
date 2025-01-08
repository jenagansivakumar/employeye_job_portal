import axios from 'axios'
import React, { ChangeEvent, useEffect, useState, useTransition } from 'react'

export default function UpdateUser() {
    const [id, setId] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }


    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(parseInt(e.target.value))
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        try {
            setError("")
            const response = await axios.put("http://localhost:4001/users", { email, id})
            console.log(`Update user ${id}'s email with ${email}`)
            if (response.status != 200){
                throw new Error("Error")
            }
        } catch (err){
            const errMessage = (err.response?.data?.message || err.message || "Error fetching")
            setError(errMessage)
        }
    }

    useEffect(() => {
        if (error) {
          const timer = setTimeout(() => {
            setError(""); 
          }, 5000);
      
          return () => clearTimeout(timer); 
        }
      }, [error]);

    if (error){
        return <div> {error}</div>
    }


  return (
    <form onSubmit={handleSubmit}>
        <label> ID </label>
            <input type='number' value={id} onChange={handleIdChange} />
        {/* <label className='name'> Name </label>
             <input name='name' type='string' value={name} onChange={handleNameChange}/> */}

        <label className='email'> Email </label>
             <input type='string' value={email} onChange={handleEmailChange} name='email' />

        <button > Submit</button>
    </form>
  )
}
