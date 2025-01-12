import {z} from "zod"




 const JobSchema = z.object({
    id: z.number(),
    jobTitle : z.string(),
    jobDescription: z.string()
})


export type Job = z.infer<typeof JobSchema>