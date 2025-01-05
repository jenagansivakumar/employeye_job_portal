import User from 'models/User'
import React, { useEffect, useState } from 'react'

export default function UserList() {

  const [users, setUsers] = useState<User[]>([])
  const [errors, setErrors]= useState <string>("")
  const [loading, setLoading] = useState <boolean> (false)


  const fetchUsers = async() => {
    setLoading(false)
    setErrors("")
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      setErrors(error)
    } finally {
      setLoading(loading)
    }
  }

  useEffect(()=> {
    fetchUsers()
  }, [])

  if (loading){
    <div> Loading........................</div>
  }

  if (errors){
    <div> {errors}</div>
  }


  return (
    <div>
      <h1> User List</h1>
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
