import User from 'models/User'
import React, { useEffect, useState } from 'react'

export default function DataFetcher() {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)


    const fetchUsers = async ()=>{
        setError("")
        setLoading(true)
        const response = await fetch("http://localhost:4001/users")
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }
    console.log(users)

    useEffect(()=>{
        fetchUsers()
    },[])

    if (loading){
       return <div> Loading...</div>
    }
    if (error){
       return  <div>{error}</div>
    }

    if (users.length === 0){
       return  <div> Empty Users </div>
    }

  return (
    <div>
        <ul>
        {users.map(user=>(
            <li key={user.id}>
                {user.name} - {user.email}
            </li>
        ))}

        </ul>
    </div>
  )
}
