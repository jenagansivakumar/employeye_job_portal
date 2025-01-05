import { Router } from "express";
import fetchUser from "../controllers/fetchUserController.js";
import serveData from "../controllers/serveDataController.js";






const router = Router()



router.get("/fetch", fetchUser )
router.get("/data", serveData)


export default router