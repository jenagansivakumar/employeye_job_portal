import User from 'models/User'
import React, { useEffect, useState } from 'react'

export default function DataFetcher() {

    const [users, setUser] = useState<User[]>([])
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)


    const fetchData = async()=>{
        setLoading(true)
        setError("")
        try {
            const response = await fetch("http://localhost:4000/users")
            const data = await response.json()
            console.log(Array.isArray(data.users))
            console.log(data)
            setUser(data)
        } catch (err: any){
            setError("Unexpected error")
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])


    if (loading){
        return <div>LOADING....</div>
    }

    if (error){
        return <div> {error}</div>
    }


  return (
   <div>
        <ul>
            {users.map((user)=> (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>

            ))}
        </ul>
   </div>
  )
}
