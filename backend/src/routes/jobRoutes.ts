import { Router } from "express";
import { createJob } from "../controllers/job/createJob.js";
import { fetchAllJobs } from "../controllers/job/getAllJobs.js";
import { updateJobDetail } from "../controllers/job/updateJobDetails.js";
import { deleteJob } from "../controllers/job/deleteJob.js";
import { verifyToken } from "../middleware/authMiddleware.js";



export const jobRouter = Router()


jobRouter.post("/create", verifyToken, createJob)
jobRouter.get("/fetch", fetchAllJobs)
jobRouter.put("/update", verifyToken, updateJobDetail)
jobRouter.delete("/delete", verifyToken, deleteJob)