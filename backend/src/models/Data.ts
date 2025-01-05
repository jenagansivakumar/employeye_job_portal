import {z} from "zod"



export const DataInterface = z.object({
    message: z.string(),
    timestamp: z.date(),
    id: z.number()
})


export const DataArrayInterface = z.array(DataInterface)


export type Data = z.infer<typeof DataInterface>