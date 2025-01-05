import { Router } from "express";

import healthCheck from "../controllers/healthController.js";
import fetchUsers from "../controllers/fetchUserController.js";
import createUser from "../controllers/createUserController.js";
import deleteUser from "../controllers/deleteUserController.js";
import updateUser from "../controllers/updateUserController.js";
import searchUsers from "../controllers/searchUserController.js";


const router = Router()

router.get("/health", healthCheck)
router.get("/users", fetchUsers)
router.post("/users", createUser)
router.delete("/users/:id", deleteUser)
router.put("/users/:id", updateUser)
router.get("/search", searchUsers)

export default router