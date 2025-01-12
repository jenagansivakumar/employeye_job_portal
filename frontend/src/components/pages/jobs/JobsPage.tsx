import React, { useEffect, useState } from 'react'
import { Job } from '../../../models/JobSchema'
import axios from 'axios'

export const JobsPage = () => {
    const [jobs, setJobs] = useState<Job[]>([])
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)


    const fetchJobs = async() => {
        setError("")
        setLoading(true)

        try {
            const response = await axios.get("http://localhost:4000/jobs/fetch")
            setJobs(response.data)
            console.log(response.data)
        } catch (error){
            setError(error.message || "Cannot fetch jobs")
        } finally {
            setLoading(false)
        }
    }

    useEffect( ()=>{
         fetchJobs()
    }, [])


  return (
    <>
    <h1>All Jobs</h1>

    <div>
        <ul>
            {jobs.map(job =>(
                <li key={job.id}> {job.jobTitle} {job.jobDescription}</li>
            ))}
        </ul>
    </div>
    </>
    
  )
}
