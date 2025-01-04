import { Router } from "express";
import { fetchUsers } from "../controllers/fetchUsers.js";



const router = Router()



router.get("/users", fetchUsers)


export default router