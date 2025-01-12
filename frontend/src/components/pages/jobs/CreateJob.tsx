import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Job, JobSchema } from '../../../models/JobSchema'
import {z} from "zod"
import { Button } from '../../ui/button'

type JobData = z.infer<typeof JobSchema>

export const CreateJob = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<JobData>({
        resolver: zodResolver(JobSchema)
    })
    
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<string>("")


    const createJob = async(data: JobData)=>{
        setError("")
        setLoading(true)

        try {
            const response = await axios.post("http://localhost:4000/jobs/create", data, {headers: {"Content-Type": "application/json"}})
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

    const onSubmit = async(data: JobData) => {
        console.log(data)
        createJob(data)
    }



  return (
    
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2> Create Job</h2>
                <label> Job Title</label>
                <input {...register("jobTitle")}/>
                <label> Job Description</label>
                <input {...register("jobDescription")} />
                <button type='submit'> Submit</button>
            </form>

   
  )
}
