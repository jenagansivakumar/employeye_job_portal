import { FormSchema } from '@/models/FormSchema'
import { useState } from 'react'
import {useForm} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'


type FormData = z.infer<typeof FormSchema>

export const fignUpPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(FormSchema)
    })
    const [error,setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<string> ("")


    const userFignUp = async(data: FormData) => {
       setError("")
       setLoading(true)


       try {
        const response = await axios.post("http://localhost:4000/auth/signup", data, {headers: {"Content-Type" : "application/json"} } )
       }
    }


  return (
    <div>fignUpPage</div>
  )
}
