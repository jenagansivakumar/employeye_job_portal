import { Router } from "express";
import { fetchUsers } from "../fetchUsersController.js";



const router = Router()


router.get("/users", fetchUsers)


export default router