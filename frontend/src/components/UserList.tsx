import User from 'models/User'
import React, { useEffect, useState } from 'react'

export const UserList = () => {

    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)


    const fetchUsers = async() => {
        setError("")
        setLoading(true)
        
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data)
        } catch (error){
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchUsers()
    }, [])


    if (loading){
        <div> Loading ....</div>
    }

    if (error){
        <div> {error}</div>
    }


  return (
    <div>
        <h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </h2>
    </div>
  )
}
