import React, { useState, useTransition } from 'react'
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '../../models/FormSchema'

export const LoginPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const userLogin = async()=>{
        setError("")
        setLoading(true)


        try {

        }
    }
    return (
        <form>
            <label>Username</label>
                <input/>
        </form>

    )
  
}
