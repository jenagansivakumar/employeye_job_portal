import { Router } from "express";
import { createJob } from "../controllers.ts/job/createJob.js";
import { fetchAllJobs } from "../controllers.ts/job/getAllJobs.js";



export const jobRouter = Router()


jobRouter.get("/create", createJob)
jobRouter.get("/fetch", fetchAllJobs)