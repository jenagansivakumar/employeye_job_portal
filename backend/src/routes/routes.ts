import { Router } from "express";
import { fetchUsers } from "../controllers/fetchUsersController.js";
import { createUser } from "../controllers/createUserController.js";
import { deleteUser } from "../controllers/deleteUserController.js";




export const router = Router()


router.get("/users", fetchUsers)
router.delete("/users", deleteUser)
router.post("/users", createUser)