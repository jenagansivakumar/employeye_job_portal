import {z} from "zod"





export const userSchema = z.object({
    name: z.string(),
})

export const usersSchema = z.array(userSchema)



