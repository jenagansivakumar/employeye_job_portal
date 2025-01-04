import { Router } from "express";
import sayHello from "../controllers/homeController.js";
import getUsers from "../controllers/usersController.js";


const router = Router()



router.get("/", sayHello)
router.get("/users", getUsers )


export default router