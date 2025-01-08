import { Router } from "express";
import { fetchUsers } from "../controllers/fetchUsersController.js";




export const router = Router()


router.get("/users", fetchUsers)