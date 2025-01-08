import { Router } from "express";
import { getUser } from "../controllers/getUserController.js";



export const router = Router()



router.get("/user", getUser)


