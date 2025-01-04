import {z} from "zod"


const userSchema = z.object({
    name: z.string()
})

const userListSchema = z.array(userSchema)

export {userListSchema, userSchema}