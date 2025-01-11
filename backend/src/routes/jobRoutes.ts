import { Router } from "express";
import { createJob } from "../controllers.ts/job/createJob.js";
import { fetchAllJobs } from "../controllers.ts/job/getAllJobs.js";
import { updateJobDetail } from "../controllers.ts/job/updateJobDetails.js";



export const jobRouter = Router()


jobRouter.post("/create", createJob)
jobRouter.get("/fetch", fetchAllJobs)
jobRouter.put("/update", updateJobDetail)