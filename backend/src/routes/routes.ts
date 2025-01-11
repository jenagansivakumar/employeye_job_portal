import { Router } from "express";
import { fetchAllUsers } from "../controllers.ts/fetchAllUsers.js";




export const router = Router()

router.get("/users", fetchAllUsers)