import axios from 'axios'
import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { formSchema } from '../../models/FormSchema'
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod"
import { Button } from '../ui/button';

type FormData = z.infer<typeof formSchema>
export const LoginPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [loading,setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<string>("")


    const authUser = async ()=>{
        setError("")
        setLoading(true)

        try {
            const response = await axios.post("http://localhost:4000/auth/create_user")
            setSuccess("Created new user!")
            console.log(response.data)
        } catch (error: any){
            setError(error.message || "Cannot create new user")
        } finally {
            setLoading(false)
        }
    }

    const onSubmit = async(data) => {
        console.log(data)
        await authUser()
    }




  return (
    <form onSubmit={onSubmit}>
        <label> Name </label>
            <input {...register('name')} type='text' />
            <p>{errors.name?.message}</p>
        <label> Email </label>
            <input {...register("email")} type='email'/>
        <label>Username</label>
            <input {...register("username")} type='text'/>
        <label> Password </label>
            <input {...register("password")} type='password' />
        <Button>Submit</Button>
    </form>
  )
}
