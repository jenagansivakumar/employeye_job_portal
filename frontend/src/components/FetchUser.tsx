import User from 'models/User'
import React, { useState } from 'react'

export default function FetchUser() {

    const [users, setUser] = useState<User[]>([])
    const [error, setError] = useState<string>("")
  return (
    <div>FetchUser</div>
  )
}
