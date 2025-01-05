import React, { use, useEffect, useState } from 'react'

export const DataFetcher = () => {

    const [data, setData] = useState<Data[]>([])
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)


    const fetchData = async() => {
        setLoading(true)
        setError("")
        try {
            const response = await fetch("http://localhost:4000/data")
            const data = await response.json()
            setData(data)
        } catch (error) {
            setError(error.message || "An Error Has Occurred")
        } finally {
            setLoading(false)
        }
    } 


    useEffect(()=> {
        fetchData()
    }, [])

    if (loading) {
        <div> Loading...</div>
    }

    if (error) {
        <div> {error}</div>
    }

    return (
        <>
        <h2> User Data</h2>
            <ul>
                {data.map(user => (
                    <li key={user.id}> Message: {user.message} Time {new Date(user.timestamp).toISOString()}</li>
                ))}
            </ul>
        </>
    )

 
}
