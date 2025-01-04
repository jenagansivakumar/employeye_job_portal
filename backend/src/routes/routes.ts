import { Router } from "express";
import getUsers from "../controllers/getUsersController.js";
import welcome from "../controllers/welcomeController.js";
import about from "../controllers/aboutController.js";
import postTest from "../controllers/postTest.js";



const router = Router()



router.get("/users", getUsers)
router.get("/", welcome )
router.get("/about", about )
router.post("/test", postTest)


export default router