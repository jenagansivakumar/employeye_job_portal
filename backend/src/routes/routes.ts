import { Router } from "express";
import { getUsers } from "../controllers/getUserController.js";
import { createUser } from "../controllers/createUserController.js";





export const router = Router()

router.get("/users", getUsers)
router.post("/users", createUser)




