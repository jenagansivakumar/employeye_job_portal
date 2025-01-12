import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Job, JobSchema } from '../../../models/JobSchema'
import {z} from "zod"

type JobData = z.infer<typeof JobSchema>

export const CreateJob = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<Job>({
        resolver: zodResolver(JobSchema)
    })
    const [jobTitle, setJobTitle] = useState<string>("")
    const [jobDescription, setJobDescription] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<string>("")


    const createJob = async(data: JobData)=>{
        setError("")
        setLoading(true)

        try {
            const response = await axios.post("http://localhost:4000/jobs/post", data, {headers: {"Content-Type": "application/json"}})
            setSuccess("Successfully added job!")
            
        } catch (error){
            if (error.response || error.response.data.message){
                setError(error.response.data.message)
            } else {
                setError(error.message || "Cannot create job")
            }
        } finally {
            setLoading(false)
        }
    }

    const onSubmit = async(data) => {
        createJob(data)
    }


  return (
    <div className='container'>
        <div className='wrapper'>
            <form onSubmit={handleSubmit(onsu)}>

            </form>

        </div>

    </div>
  )
}
