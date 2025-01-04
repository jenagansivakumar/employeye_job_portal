import { Router } from "express";
import getUsers from "../controllers/getUsersController.js";
import welcome from "../controllers/welcomeController.js";



const router = Router()



router.get("/users", getUsers)
router.get("/", welcome )


export default router