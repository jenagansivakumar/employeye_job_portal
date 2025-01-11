import { Router } from "express";
import { fetchAllUsers } from "../controllers.ts/fetchAllUsers.js";
import { createUser } from "../controllers.ts/createUser.js";




export const router = Router()

router.get("/users", fetchAllUsers)
router.post("/users", createUser)