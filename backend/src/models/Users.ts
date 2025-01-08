import {z} from "zod"


export const User = z.object({
    name: z.string(),
})

export const Users = z.array(User)