import { Router } from "express";
import { fetchUsers } from "../controllers.ts/fetchUsersController.js";
import { createUser } from "../controllers.ts/createUserController.js";
import { updateUser } from "../controllers.ts/updateUserController.js";




export const router = Router()


router.get("/users", fetchUsers)
router.post("/users", createUser)
router.put("/users", updateUser)