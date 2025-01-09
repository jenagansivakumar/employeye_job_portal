import { Router } from "express";
import { fetchUsers } from "../controllers.ts/fetchUsersController.js";
import { createUser } from "../controllers.ts/createUserController.js";



const router = Router()


router.get("/users", fetchUsers)
router.post("/users", createUser)


export default router