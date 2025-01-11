import { Router } from "express";
import { createJob } from "../controllers.ts/job/createJob.js";
import { fetchAllJobs } from "../controllers.ts/job/getAllJobs.js";
import { updateJobDetail } from "../controllers.ts/job/updateJobDetails.js";
import { deleteJob } from "../controllers.ts/job/deleteJob.js";



export const jobRouter = Router()


jobRouter.post("/create", createJob)
jobRouter.get("/fetch", fetchAllJobs)
jobRouter.put("/update", updateJobDetail)
jobRouter.delete("/delete", deleteJob)