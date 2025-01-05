import { Router } from "express";

import healthCheck from "../controllers/healthController.js";
import fetchUsers from "../controllers/fetchUserController.js";
import createUser from "../controllers/createUserController.js";
import deleteUser from "../controllers/deleteUserController.js";


const router = Router()

router.get("/health", healthCheck)
router.get("/users", fetchUsers)
router.post("/users", createUser)
router.delete("/users/:id", deleteUser)

export default router