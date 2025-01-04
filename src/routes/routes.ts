import { Router } from "express";
import fetchUsers from "../controllers/fetchUsers.js";
import fetchUsersByName from "../controllers/fetchUserById.js";


const router = Router()



router.get("/user", fetchUsers)
router.get("/user/:name", fetchUsersByName)


export default router