import { Router } from "express";
import { createUser } from "../controllers/auth/signUp.js";



export const authRouter = Router()

authRouter.post("/create_user", createUser)