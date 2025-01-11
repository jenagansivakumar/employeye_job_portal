import User from 'models/User'
import React, { useState } from 'react'

export default function DeleteUser() {
    const [userID, setUserId] = useState<number>(0)
    const [deletedUser, setDeletedUser] = useState<User>(null)
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)


    const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUserId(parseInt(e.target.value))
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        const userExists = async() =>{
        
        }
    }
    
  return (
   <form onSubmit={handleSubmit}>
        <label>User ID</label>
            <input type='number' value={userID} onChange={handleUserIdChange} />

        <h2> OutPut</h2>
            <h3></h3>
   </form>
  )
}
