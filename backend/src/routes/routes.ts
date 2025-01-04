import { Router } from "express";
import getUsers from "../controllers/getUsersController.js";
import welcome from "../controllers/welcomeController.js";
import about from "../controllers/aboutController.js";



const router = Router()



router.get("/users", getUsers)
router.get("/", welcome )
router.get("/about", about )


export default router