import { Router } from "express";
import fetchUsers from "../controllers/fetchUsersController.js";
import createUser from "../controllers/createUserController.js";




const router = Router()



router.get("/users", fetchUsers)
router.post("/users", createUser)



export default router