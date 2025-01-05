import User from 'models/User'
import React, { useEffect, useState, useTransition } from 'react'

export default function DataFetcher() {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)



    const fetchUsers = async() => {
        setError("")
        setLoading(true)

        const response = await fetch("http://localhost:4000/users")
        const data = await response.json()
        console.log(data)
        setUsers(data)
        setError(error)
        setLoading(false)
    }

    useEffect(()=> {
        fetchUsers()
    }, [])

    if (loading){
        return <div> Loading...</div>
    }
    if (error) {
       return  <div> {error} </div>
    }

  return (
    <div>
        <h2> Users</h2>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    </div>
  )
}
