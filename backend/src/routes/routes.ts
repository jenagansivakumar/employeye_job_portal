import { Router } from "express";
import { fetchAllUsers } from "../controllers.ts/fetchUsers.js";




export const router = Router()

router.get("/users", fetchAllUsers)