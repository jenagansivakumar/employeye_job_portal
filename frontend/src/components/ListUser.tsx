import User from 'models/User'
import React, { useState } from 'react'

export default function ListUser() {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState<string>("")
    const [loading,setLoading] = useState<boolean>(false)



  return (
    <div>ListUser</div>
  )
}
