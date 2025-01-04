import { Router } from "express";
import fetchUsers from "../controllers/fetchUsers.js";
import fetchPolicies from "../controllers/policyController.js";






const router = Router()


router.get("/policies", fetchPolicies )


export default router